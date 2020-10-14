const { Batch } = require('../models/index');
const mongoose = require('./mongoose');

async function createBatch(params) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) 
        throw 'Batch already exists.';
    const batch = new Batch(params);
    return await batch.save();
}

async function promoteBatch(params) {
    await Batch.updateOne({ Year: params.Year, Program: params.Program }, {
        Phase: params.Phase,
    });
    return await Batch.findOne({ Year: params.Year, Program: params.Program });
}

async function deleteBatch(params) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) {
        await Batch.deleteOne({ Year: params.Year, Program: params.Program }, err => {
            if (err) throw err;
        });
    } else throw 'Batch does not exist.';
}

async function getBatches() {
    return await Batch.find();
}

async function getSlimBatches() {
    const batches = await Batch.find();
    let slimBatches = [];
    batches.forEach(batch => {
        slimBatches.push({ Year: batch.Year, Program: batch.Program });
    }); return slimBatches;
}

async function addSupervisorToBatch(params) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) {
        if (await Batch.findOne({ 
            Year: params.Year, 
            Program: params.Program,
            'Supervisors.Username': params.Username
        })) throw 'Supervisor already exists in batch.';
        return await Batch.updateOne(
            { Year: params.Year, Program: params.Program }, 
            { $push: { Supervisors: {
                Username: params.Username, 
                Proposals: []
            } } }
        );
    } else throw 'Batch does not exist.';
}

async function deleteSupervisorFromBatch(params) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) {
        if (await Batch.findOne({ 
            Year: params.Year, 
            Program: params.Program,
            'Supervisors.Username': params.Username
        })) {
            return await Batch.updateOne(
                { Year: params.Year, Program: params.Program }, 
                { $pull: { Supervisors: {
                    Username: params.Username
                } } }
            );
        } throw 'Supervisor does not exist.';
    } else throw 'Batch does not exist.';
}

async function addStudentToBatch(params) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) {
        if (await Batch.findOne({
            Year: params.Year, 
            Program: params.Program, 
            'Students.RollNumber': params.RollNumber
        })) throw 'Student already exists in batch.';
        return await Batch.updateOne(
            { Year: params.Year, Program: params.Program }, 
            { $push: { Students: {
                RollNumber: params.RollNumber
            } } }
        );
    } else throw 'Batch does not exist.';
}

async function deleteStudentFromBatch(params) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) {
        if (await Batch.findOne({ 
            Year: params.Year, 
            Program: params.Program,
            'Students.RollNumber': params.RollNumber
        })) {
            return await Batch.updateOne(
                { Year: params.Year, Program: params.Program }, 
                { $pull: { Students: {
                    RollNumber: params.RollNumber
                } } }
            );
        } throw 'Student does not exist.';
    } else throw 'Batch does not exist.';
}

module.exports = {
    createBatch,
    promoteBatch,
    deleteBatch,
    getBatches,
    getSlimBatches,
    addSupervisorToBatch,
    deleteSupervisorFromBatch,
    addStudentToBatch,
    deleteStudentFromBatch
}