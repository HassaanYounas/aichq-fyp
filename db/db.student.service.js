const { Student } = require('../models/index');
const mongoose = require('./mongoose');

async function addStudent(params) {
    if (await Student.findOne({ RollNumber: params.RollNumber })) throw 'Roll number already exists.';
    const student = new Student(params);
    return await student.save();
}

async function getStudents() {
    return await Student.find();
}

module.exports = {
    addStudent,
    getStudents
}