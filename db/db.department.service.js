const { Department } = require('../models/index');
const mongoose = require('./mongoose');

async function addDepartment(params) {
    if (await Department.findOne({ Name: params.Name })) 
        throw 'Department already exists.';
    const department = new Department(params);
    return await department.save();
}

async function getDepartments(params) {
    return await Department.find();
}

module.exports = {
    addDepartment,
    getDepartments
}