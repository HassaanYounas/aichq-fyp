const { Department } = require('../models/index');
const mongoose = require('./mongoose');

async function addStudent(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        department.Programs.forEach(e => {
            if (e.Title == params.Program) {
                e.Batches.forEach(b => {
                    if (b.Year == params.Year && b.Session == params.Session) {
                        let students = b.Students;
                        students.forEach(s => {
                            if (s.RollNumber == params.RollNumber) throw 'Student already exists.';
                        });
                        b.Students.push({
                            FullName: params.FullName,
                            RollNumber: params.RollNumber
                        });
                    }
                });
            }
        }); return await department.save();
    }
}

async function getStudents(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        let students = [];
        department.Programs.forEach(e => {
            e.Batches.forEach(b => {
                b.Students.forEach(s => {
                    students.push({
                        FullName: s.FullName,
                        RollNumber: s.RollNumber,
                        Phase: s.Phase,
                        Program: e.Title,
                        Session: b.Session,
                        Year: b.Year,
                        Group: s.Group
                    });
                }); 
            });
        }); return students;
    }
}

async function getStudentsOfBatch(params) {
    const department = await Department.findOne({ Name: params.Department });
    if (department) {
        let students = [];
        department.Programs.forEach(e => {
            e.Batches.forEach(b => {
                if (b.Session == params.Session && b.Year == params.Year) {
                    b.Students.forEach(s => {
                        students.push({
                            FullName: s.FullName,
                            RollNumber: s.RollNumber,
                            Phase: s.Phase,
                            Program: e.Title,
                            Session: b.Session,
                            Year: b.Year,
                            Group: s.Group
                        });
                    }); 
                }
            });
        }); return students;
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentsOfBatch
}