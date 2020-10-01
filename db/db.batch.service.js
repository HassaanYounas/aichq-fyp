const { Batch } = require('../models/index');
const mongoose = require('./mongoose');

async function createBatch(params) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) 
        throw 'Batch Already Exists.';
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
    } else throw 'Batch Does Not Exist.';
}

async function getBatches() {
    return await Batch.find();
}

module.exports = {
    createBatch,
    promoteBatch,
    deleteBatch,
    getBatches
}