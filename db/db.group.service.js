const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Department, PendingGroup, GroupToken } = require('../models/index');
const mongoose = require('./mongoose');
const nodemailer = require('nodemailer');

function generateToken(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } return result;
}

async function loginGroup(params) {
    const department = await Department.find({ Name: params.Department });
    if (department) {
        let group;
        department.Programs.forEach(p => {
            if (p.Title === params.Program) {
                p.Batches.forEach(b => {
                    if (b.Session === params.Session && b.Year === params.Year) {
                        b.Groups.forEach(g => {
                            if (
                                g.Username === params.Username &&  
                                bcrypt.compareSync(params.Password, g.Password) 
                            ) group = g;
                        });
                    }
                });
            }
        });
        if (group) {
            const { 
                Username, 
                StudentOne, 
                StudentTwo, 
                SupervisorRequests, 
                Password, 
                ...groupWithoutPassword 
            } = group.toObject();
            const token = jwt.sign({ sub: group.id }, config.secret);
            return { ...groupWithoutPassword, token };
        } else throw 'Invalid email or password.';
    } else throw 'Department not found.';
}

async function sendEmail(Student, Host, StudentNumber, OtherStudent, GroupID, DepartmentID) {
    const groupToken = new GroupToken({ RollNumber: Student.RollNumber, Token: generateToken(64)});
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io', port: 2525,
        auth: { user: 'a36d2a20fc0a61', pass: '6c9e693d3d4cc6' }
    });
    let mailOptions = {
        from: 'no.reply@aichq.com',
        to: Student.RollNumber + '@students.au.edu.pk',
        subject: 'AichQ | FYP Group Verfication | Request from ' + OtherStudent.FullName,
        text:
            'Hello, ' + Student.FullName + ' (' + Student.RollNumber + ').' + '\n\n' +
            'By clicking on the link below you agree to make FYP Group with ' + OtherStudent.FullName + ' (' + OtherStudent.RollNumber + '):\n\n' +
            'http:\/\/' + Host + '\/api\/group\/verify\/' 
            + Student.RollNumber + '\/' + groupToken.Token + '\/' + StudentNumber + '\/' + GroupID + '\/' + DepartmentID + '\n'
    }; 
    await groupToken.save();
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
                return;
            } resolve(info);
        });
    });
}

async function registerGroup(params, req) {
    const department = await Department.find({ Name: params.Department });
    if (department) {
        if (await PendingGroup.findOne({ Username: params.Username })) throw 'Username already exists.';
        try {
            const pendingGroup = new PendingGroup(params);
            for (let i = 0; i < 2; i++) {
                try {
                    info = await sendEmail(params.StudentOne, req.headers.host, 'One', params.StudentTwo, pendingGroup._id, params.DepartmentID);
                    break;
                } catch (e) { error = e; }
            }
            for (let i = 0; i < 2; i++) {
                try {
                    info = await sendEmail(params.StudentTwo, req.headers.host, 'Two', params.StudentOne, pendingGroup._id, params.DepartmentID);
                    break;
                } catch (e) { error = e; }
            }
            pendingGroup.Password = bcrypt.hashSync(pendingGroup.Password, 10);
            return await pendingGroup.save();
        } catch (err) { throw err; }
    } throw 'Department not found.';
}

async function verifyGroup(params) {
    const department = await Department.find({ _id: params.DepartmentID });
    if (department) {
        if (await GroupToken.find({ RollNumber: params.RollNumber, Token: params.Token })) {
            if (params.Student == 'One') {
                const pendingGroup = await PendingGroup.find({ _id: params.GroupID });
                if (pendingGroup) {
                    pendingGroup.StudentOne.Verified = true;
                    if (pendingGroup.StudentTwo.Verified === true) {
                        department.Programs.forEach(p => {
                            if (p.Title === pendingGroup.Program) {
                                p.Batches.forEach(b => {
                                    if (b.Session === pendingGroup.Session && b.Year === pendingGroup.Year) {
                                        b.Groups.push({
                                            Username: pendingGroup.Username,
                                            Password: pendingGroup.Password,
                                            'StudentOne.RollNumber': pendingGroup.StudentOne.RollNumber,
                                            'StudentTwo.RollNumber': pendingGroup.StudentTwo.RollNumber,
                                            SupervisorRequests: []
                                        });
                                        b.Students.forEach(s => {
                                            if (
                                                s.RollNumber === pendingGroup.StudentOne.RollNumber ||
                                                s.RollNumber === pendingGroup.StudentTwo.RollNumber
                                            ) {
                                                s.Group = true;
                                                s.Phase = 1;
                                            }
                                        });
                                    }
                                });
                            }
                        }); await department.save();
                        await PendingGroup.deleteOne({ _id: params.GroupID });
                    } else await pendingGroup.save();
                    return await GroupToken.deleteOne({ RollNumber: params.RollNumber });
                }
            } else if (params.Student == 'Two') {
                const pendingGroup = await PendingGroup.findOne({ _id: params.GroupID });
                if (pendingGroup) {
                    pendingGroup.StudentTwo.Verified = true;
                    if (pendingGroup.StudentOne.Verified === true) {
                        department.Programs.forEach(p => {
                            if (p.Title === pendingGroup.Program) {
                                p.Batches.forEach(b => {
                                    if (b.Session === pendingGroup.Session && b.Year === pendingGroup.Year) {
                                        b.Groups.push({
                                            Username: pendingGroup.Username,
                                            Password: pendingGroup.Password,
                                            'StudentOne.RollNumber': pendingGroup.StudentOne.RollNumber,
                                            'StudentTwo.RollNumber': pendingGroup.StudentTwo.RollNumber,
                                            SupervisorRequests: []
                                        });
                                        b.Students.forEach(s => {
                                            if (
                                                s.RollNumber === pendingGroup.StudentOne.RollNumber ||
                                                s.RollNumber === pendingGroup.StudentTwo.RollNumber
                                            ) {
                                                s.Group = true;
                                                s.Phase = 1;
                                            }
                                        });
                                    }
                                });
                            }
                        }); await department.save();
                        await PendingGroup.deleteOne({ _id: params.GroupID });
                    } else await pendingGroup.save();
                    return await GroupToken.deleteOne({ RollNumber: params.RollNumber });
                }
            }
        } throw 'Link is either invalid or has expired.';
    } throw 'Department not found.'; 
}

async function getGroups(params) {
    const department = await Department.find({ Name: params.Department });
    if (department) {
        let groups = [];
        department.Programs.forEach(p => {
            p.Batches.forEach(b => {
                b.Groups.forEach(g => {
                    groups.push({
                        Department: department.Name,
                        Program: p.Title,
                        Session: b.Session,
                        Year: b.Year,
                        Username: g.Username,
                        SupervisorEmail: g.SupervisorEmail,
                        ProjectTitle: g.ProjectTitle,
                        StudentOne: {
                            RollNumber: g.StudentOne.RollNumber
                        },
                        StudentTwo: {
                            RollNumber: g.StudentTwo.RollNumber
                        }
                    })
                });
            });
        }); return groups;
    } else throw 'Department not found.';
}

async function getGroup(params) {
    const department = await Department.find({ Name: params.Department });
    if (department) {
        let group;
        department.Programs.forEach(p => {
            if (p.Title == params.Program) {
                p.Batches.forEach(b => {
                    if (b.Session == params.Session && b.Year == params.Year) {
                        b.Groups.forEach(g => {
                            if (g._id == params.GroupID) {
                                group = {
                                    Department: department.Name,
                                    Program: p.Title,
                                    Session: b.Session,
                                    Year: b.Year,
                                    Username: g.Username,
                                    SupervisorEmail: g.SupervisorEmail,
                                    ProjectTitle: g.ProjectTitle,
                                    StudentOne: {
                                        RollNumber: g.StudentOne.RollNumber
                                    },
                                    StudentTwo: {
                                        RollNumber: g.StudentTwo.RollNumber
                                    }
                                }
                            }
                        });
                    }
                });
            }
        }); return group;
    } else throw 'Department not found.';
}

async function assignSupervisor(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Programs.forEach(p => {
            if (p.Title == params.Program) {
                p.Batches.forEach(b => {
                    if (b.Session == params.Session && b.Year == params.Year) {
                        b.Groups.forEach(g => {
                            if (g._id == params.GroupID) {
                                g.SupervisorEmail = params.SupervisorEmail;
                                g.ProjectTitle = params.ProposalTitle;
                                g.SupervisorRequests = [];
                            }
                        });
                    }
                });
            }
        }); return await department.save();
    } else throw 'Department not found.';
}

module.exports = {
    loginGroup,
    registerGroup,
    verifyGroup,
    getGroups,
    getGroup,
    assignSupervisor
}