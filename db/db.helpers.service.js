const { Admin, Batch, Group, Supervisor } = require('../models/index');
const mongoose = require('./mongoose');

async function getEverything() {
    return Promise.all([
        Admin.find(), 
        Batch.find(),
        Group.find(),
        Supervisor.find()
    ]);
}

async function clearDB() {
    return Promise.all([
        Admin.deleteMany(), 
        Batch.deleteMany(),
        Group.deleteMany(),
        Supervisor.deleteMany()
    ]);
}

module.exports = { getEverything, clearDB }
