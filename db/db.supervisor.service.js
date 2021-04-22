const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Department } = require('../models/index');
const mongoose = require('./mongoose');
const nodemailer = require('nodemailer');
const { param } = require('../routes/group.router');

function generatePassword(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } return result;
}

function sendEmail(supervisor, department) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io', port: 2525,
        auth: { user: 'a36d2a20fc0a61', pass: '6c9e693d3d4cc6' }
    });
    let mailOptions = {
        from: 'no.reply@aichq.com',
        to: supervisor.Email,
        subject: 'AichQ | FYP Supervisor | Account Information',
        text: `Respected ${supervisor.FullName},\n\nYou have been registered as an FYP Supervisor for ${department} department.\n\nYour login credentials for AichQ are:\nEmail: ${supervisor.Email}\nPassword: ${supervisor.Password}\n\nYou can access AichQ from here: aichq-fyp.herokuapp.com\n\nRegards, AichQ Team.`
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
                return;
            } resolve(info);
        });
    });
}

async function loginSupervisor(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        let supervisor;
        department.Supervisors.forEach(s => {
            if (
                s.Email === params.Email && 
                bcrypt.compareSync(params.Password, s.Password) 
            ) supervisor = s;
        });
        if (supervisor) {
            if (!supervisor.Active) throw 'Your account is currently inactive.';
            const { Active, Proposals, Password, ...supervisorSlim } = supervisor.toObject();
            const token = jwt.sign({ sub: supervisor.id }, config.secret);
            return { ...supervisorSlim, token };
        }
        else throw 'Invalid email or password.';
    } else throw 'Department not found.';
}

async function addSupervisor(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Supervisors.forEach(s => {
            if (s.Email === params.Email) throw 'Email already exists.';
        });
        let supervisor = {
            FullName: params.FullName,
            Email: params.Email,
            // Password: generatePassword(8),
            Password: '123456789',
            Designation: params.Designation
        }
        for (let i = 0; i < 2; i++) {
            try { info = await sendEmail(supervisor, params.Department); break; } 
            catch (e) { error = e; }
        }
        supervisor.Password = bcrypt.hashSync(supervisor.Password, 10);
        department.Supervisors.push(supervisor);
        return await department.save();
    } else throw 'Department not found.';
}

async function setSupervisorInactive(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Supervisors.forEach(s => {
            if (s.Email == params.Email) s.Active = false;
        });
        return await department.save();
    } else throw 'Department not found.';
}

async function setSupervisorActive(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Supervisors.forEach(s => {
            if (s.Email == params.Email) s.Active = true;
        });
        return await department.save();
    } else throw 'Department not found.';
}

async function submitSupervisorProposal(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Supervisors.forEach(s => {
            if (s.Email == params.Email) {
                s.Proposals.push({
                    BatchID: params.Program + '-' + params.Session + '-' + params.Year,
                    Domain: params.Domain,
                    Title: params.Title,
                    Abstract: params.Abstract
                });
            }
        });
        return await department.save();
    } else throw 'Department not found.';
}

async function getSupervisorProposals(params) {
    if ('Email' in params) {
        const department = await Department.findOne({ Name: params.Department });
        if (department) {
            let proposals = [];
            department.Supervisors.forEach(s => {
                if (s.Email == params.Email) proposals = s.Proposals;
            }); return proposals;
        } else throw 'Department not found.';
    } else if ('Program' in params) {
        const department = await Department.findOne({ Name: params.Department });
        if (department) {
            let proposals = [];
            department.Supervisors.forEach(s => {
                s.Proposals.forEach(p => {
                    let batchID = params.Program + '-' + params.Session + '-' + params.Year;
                    if (p.BatchID == batchID && p.Approved == 1) {
                        proposals.push({
                            Approved: p.Approved,
                            id: p._id,
                            BatchID: p.BatchID,
                            Domain: p.Domain,
                            Title: p.Title,
                            Abstract: p.Abstract,
                            Email: s.Email
                        });
                    }
                });
            }); return proposals
        } else throw 'Department not found.';
    } else {
        const department = await Department.findOne({ Name: params.Department });
        if (department) {
            let proposals = [];
            department.Supervisors.forEach(s => {
                s.Proposals.forEach(p => {
                    proposals.push({
                        Approved: p.Approved,
                        id: p._id,
                        BatchID: p.BatchID,
                        Domain: p.Domain,
                        Title: p.Title,
                        Abstract: p.Abstract,
                        Email: s.Email
                    });
                });
            }); return proposals;
        } else throw 'Department not found.';
    }
}

async function updateSupervisorProposal(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Supervisors.forEach(s => {
            if (s.Email == params.Email) {
                s.Proposals.forEach(p => {
                    if (p._id == params._id) p.Approved = params.Approved;
                });
            }
        }); return await department.save();
    } else throw 'Department not found.';
}

async function addSupervisionRequest(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        let exists = false;
        department.Programs.forEach(p => {
            if (p.Title == params.Program) {
                p.Batches.forEach(b => {
                    if (b.Session == params.Session && b.Year == params.Year) {
                        b.Groups.forEach(g => {
                            if (g._id == params.GroupID) {
                                g.SupervisorRequests.forEach(sr => {
                                    if (sr.SupervisorEmail == params.SupervisorEmail) exists = true;
                                });
                                if (!exists) {
                                    g.SupervisorRequests.push({
                                        ProposalTitle: params.ProposalTitle,
                                        SupervisorEmail: params.SupervisorEmail
                                    });
                                }
                            }
                        });
                    }
                });
            }
        }); 
        if (exists) throw 'You can cannot send multiple requests to the same supervisor. The supervisor needs to reject your previous request to be able to receive a new request.';
        else return await department.save();       
    } else throw 'Department not found.';
}

async function getSupervisionRequests(params) {
    if ('Email' in params) {
        const department = await Department.findOne({ Name: params.Department });
        if (department) {
            let requests = [];
            department.Programs.forEach(p => {
                p.Batches.forEach(b => {
                    b.Groups.forEach(g => {
                        g.SupervisorRequests.forEach(sr => {
                            if (sr.SupervisorEmail == params.Email && sr.Accepted == -1) {
                                requests.push({
                                    _id: sr._id,
                                    Department: params.Department,
                                    Program: p.Title,
                                    Session: b.Session,
                                    Year: b.Year,
                                    ProposalTitle: sr.ProposalTitle,
                                    SupervisorEmail: sr.SupervisorEmail,
                                    GroupID: g._id,
                                    StudentOneRollNumber: g.StudentOne.RollNumber,
                                    StudentTwoRollNumber: g.StudentTwo.RollNumber,
                                    Accepted: sr.Accepted,
                                    Timestamp: sr.Timestamp
                                })
                            }
                        });
                    });
                });
            }); return requests;
        }
    } else {
        const department = await Department.findOne({ Name: params.Department });
        if (department) {
            let requests = [];
            department.Programs.forEach(p => {
                if (p.Title == params.Program) {
                    p.Batches.forEach(b => {
                        if (b.Session == params.Session && b.Year == params.Year) {
                            b.Groups.forEach(g => {
                                if (g._id == params.GroupID) {
                                    g.SupervisorRequests.forEach(sr => {
                                        requests.push({
                                            _id: sr._id,
                                            Department: params.Department,
                                            Program: params.Program,
                                            Session: params.Session,
                                            Year: params.Year,
                                            ProposalTitle: sr.ProposalTitle,
                                            SupervisorEmail: sr.SupervisorEmail,
                                            GroupID: params.GroupID,
                                            StudentOneRollNumber: g.StudentOne.RollNumber,
                                            StudentTwoRollNumber: g.StudentTwo.RollNumber,
                                            Accepted: sr.Accepted,
                                            Timestamp: sr.Timestamp
                                        })
                                    });
                                }
                            });
                        }
                    });
                }
            }); return requests;
        }
    }
}

async function updateSupervisionRequest(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Programs.forEach(p => {
            if (p.Title == params.Program) {
                p.Batches.forEach(b => {
                    if (b.Session == params.Session && b.Year == params.Year) {
                        b.Groups.forEach(g => {
                            if (g._id == params.GroupID) {
                                g.SupervisorRequests.forEach(sr => {
                                    if (sr._id == params._id) sr.Accepted = params.Accepted;
                                });
                            }
                        });
                    }
                });
            }
        }); return await department.save();
    }
}

async function getSupervisors(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        let supervisors = [];
        department.Supervisors.forEach(s => {
            supervisors.push({
                Active: s.Active,
                FullName: s.FullName,
                Email: s.Email,
                Designation: s.Designation
            })
        }); return supervisors;
    } else throw 'Department not found.';
}

module.exports = {
    loginSupervisor,
    addSupervisor,
    setSupervisorActive,
    setSupervisorInactive,
    submitSupervisorProposal,
    getSupervisorProposals,
    updateSupervisorProposal,
    addSupervisionRequest,
    getSupervisionRequests,
    updateSupervisionRequest,
    getSupervisors
}