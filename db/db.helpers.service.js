const {
    SuperAdmin, 
    Department, 
    PendingGroup, 
    GroupToken,
} = require('../models/index');
const mongoose = require('./mongoose');

async function getEverything() {
    return Promise.all([
        SuperAdmin.find(), 
        Department.find(), 
        PendingGroup.find(), 
        GroupToken.find()
    ]);
}

async function clearDB() {
    return Promise.all([
        Department.deleteMany(),
        PendingGroup.deleteMany(),
        GroupToken.deleteMany(),
    ]);
}

module.exports = { 
    getEverything, 
    clearDB
}