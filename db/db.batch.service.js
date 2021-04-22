const { Department } = require('../models/index');
const mongoose = require('./mongoose');

async function addBatch(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Programs.forEach(e => {
            if (e.Title == params.Program) {
                e.Batches.forEach(b => {
                    if (b.Year == params.Year && b.Session == params.Session) throw 'Batch already exists.';
                });
                e.Batches.push({
                    Session: params.Session,
                    Year: params.Year
                });
            }
        }); return await department.save();
    }
}

async function getStudentsCount(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        let count = 0;
        department.Programs.forEach(p => {
            if (p.Title == params.Program) {
                p.Batches.forEach(b => {
                    if (b.Session == params.Session && b.Year == params.Year) count = b.Students.length;
                });
            }
        });
        return await count;
    } throw 'Department not found.';
}

async function getSupervisorsCount(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        let count = 0;
        department.Supervisors.forEach(s => {
            if (s.Active) count++;
        });
        return await count;
    } throw 'Department not found.';
}

async function updateMaxGroups(params, maxGroups) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Programs.forEach(e => {
            if (e.Title == params.Program) {
                e.Batches.forEach(b => {
                    if (b.Year == params.Year && b.Session == params.Session) {
                        b.MaxGroups = maxGroups;   
                    }
                });
            }
        }); return await department.save();
    } throw 'Department not found.';
}

async function setMaxGroups(params) {
    getStudentsCount(params).then((studentDocs) => {
        getSupervisorsCount(params).then((supervisorDocs) => {
            updateMaxGroups(params, Math.ceil((studentDocs/2)/supervisorDocs)).then(() => {
                return;
            });
        });
    });
}

async function getBatches(params) {
    if ('Department' in params) {
        const department = await Department.findOne({ Name: params.Department });
        if (department) {
            let batches = [];
            department.Programs.forEach(e => {
                e.Batches.forEach(b => {
                    batches.push({
                        Department: params.Department,
                        Archived: b.Archived,
                        MaxGroups: b.MaxGroups,
                        Program: e.Title,
                        Session: b.Session,
                        Year: b.Year
                    });
                });
            }); return batches;
        } throw 'Department not found.';
    } else {
        const departments = await Department.find();
        if (departments) {
            let batches = [];
            departments.forEach(d => {
                d.Programs.forEach(p => {
                    p.Batches.forEach(b => {
                        if (b.Archived == false) {
                            batches.push({
                                Department: d.Name,
                                Program: p.Title,
                                Session: b.Session,
                                Year: b.Year
                            });
                        }
                    });
                });
            });
            return batches;
        } else 'No department found.';
    }
}

module.exports = {
    addBatch,
    setMaxGroups,
    getBatches
}