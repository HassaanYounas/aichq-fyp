const { Admin, Department, Batch, Group, Supervisor, GroupToken } = require('../models/index');
const mongoose = require('./mongoose');

async function getEverything() {
    return Promise.all([
        Admin.find(),
        Department.find(), 
        Batch.find(),
        Group.find(),
        Supervisor.find(),
        GroupToken.find()
    ]);
}

async function clearDB() {
    return Promise.all([
        Admin.deleteMany(),
        Department.deleteMany(),
        Batch.deleteMany(),
        Group.deleteMany(),
        Supervisor.deleteMany(),
        GroupToken.deleteMany()
    ]);
}

module.exports = { getEverything, clearDB }