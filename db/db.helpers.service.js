const { Patient, Doctor } = require('../models/index');
const mongoose = require('./mongoose');

async function getEverything() {
    return Promise.all([Patient.find(), Doctor.find()]);
}

async function clearDB() {
    return Promise.all([Patient.deleteMany(), Doctor.deleteMany()]);
}

module.exports = { getEverything, clearDB }
