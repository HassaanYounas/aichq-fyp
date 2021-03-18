const { Department } = require('../models/index');
const mongoose = require('./mongoose');

async function addDepartment(params) {
    if (await Department.findOne({ Name: params.Name })) 
        throw 'Department already exists.';
    const department = new Department(params);
    return await department.save();
}

async function addProgram(params) {
    if (await Department.findOne({ Name: params.Department })) {
        if (await Department.findOne({
            Name: params.Department, 
            'Programs.Title': params.Title
        })) throw 'Program already exists in department.';
        return await Department.updateOne(
            { Name: params.Department, }, 
            { $push: { Programs: {
                Title: params.Title
            } } }
        );
    } else throw 'Department does not exist.';
}

async function getPrograms(params) {
    return await Department.findOne({ Name: params.Name });
}

async function getDepartments(params) {
    return await Department.find();
}

module.exports = {
    addDepartment,
    addProgram,
    getPrograms,
    getDepartments
}