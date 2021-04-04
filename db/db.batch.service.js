const { Batch, Student, Supervisor } = require('../models/index');
const mongoose = require('./mongoose');

async function addBatch(params) {
    if (await Batch.findOne({ 
        Session: params.Session,
        Year: params.Year,
        Department: params.Department,
        Program: params.Program 
    })) throw 'Batch already exists.';
    const batch = new Batch(params);
    return await batch.save();
}

async function getStudentsCount(params) {
    return await Student.count({
        Department: params.Department,
        Program: params.Program,
        Session: params.Session,
        Year: params.Year
    }, (err, studentDocs) => {
        if (err) throw err;
        return studentDocs;
    });
}

async function getSupervisorsCount(params) {
    return await Supervisor.count({
        Department: params.Department,
        Active: true
    }, (errSupervisor, supervisorDocs) => {
        if (errSupervisor) throw errSupervisor;
        return supervisorDocs;
    })
}

async function getNumberOfBatches(params) {
    return await Batch.count({
        Department: params.Department,
        Program: params.Program
    });
}

async function updateMaxGroups(params, maxGroups) {
    return await Batch.updateOne(params, {
        MaxGroups: maxGroups
    }); 
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
    if ('Department' in params) 
        return await Batch.find({ Department: params.Department });
    else
        return await Batch.find();
}

module.exports = {
    addBatch,
    setMaxGroups,
    getBatches,
    getNumberOfBatches
}