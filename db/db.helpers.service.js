const { 
    Admin, 
    Department, 
    Batch, 
    Group,
    PendingGroup,
    Supervisor, 
    GroupToken,
    Student,
    SupervisorProposal,
    GroupProposal,
    Project
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
        Student.find(),
        SupervisorProposal.find(),
        GroupProposal.find(),
    ]);
}

async function clearDB() {
    return Promise.all([
        Admin.deleteMany(),
        Batch.deleteMany(),
        Department.deleteMany(),
        GroupProposal.deleteMany(),
        GroupToken.deleteMany(),
        Group.deleteMany(),
        PendingGroup.deleteMany(),
        Project.deleteMany(),
        Student.deleteMany(),
        SupervisorProposal.deleteMany(),
        Supervisor.deleteMany()
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