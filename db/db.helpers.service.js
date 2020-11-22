const { 
    Admin, 
    Department, 
    Batch, 
    Group,
    PendingGroup,
    Supervisor, 
    GroupToken,
    Student
} = require('../models/index');
const mongoose = require('./mongoose');

async function getEverything() {
    return Promise.all([
        Admin.find(),
        Department.find(), 
        Batch.find(),
        Group.find(),
        PendingGroup.find(),
        Supervisor.find(),
        GroupToken.find(),
        Student.find()
    ]);
}

async function clearDB() {
    return Promise.all([
        Admin.deleteMany(),
        Department.deleteMany(),
        Batch.deleteMany(),
        Group.deleteMany(),
        PendingGroup.deleteMany(),
        Supervisor.deleteMany(),
        GroupToken.deleteMany(),
        Student.deleteMany()
    ]);
}

async function removeGroup() {
    await Group.deleteMany();
    await GroupToken.deleteMany();
    return await PendingGroup.deleteMany();
}

async function removeSupervisor() {
    return await Supervisor.deleteMany();
}

async function removeStudent() {
    return await Student.deleteMany();
}

module.exports = { 
    getEverything, 
    clearDB,
    removeGroup,
    removeSupervisor,
    removeStudent
}