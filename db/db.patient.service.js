const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Patient } = require('../models/index');
const mongoose = require('./mongoose');

async function registerPatient(params) {
    if (await Patient.findOne({ email: params.email })) throw 'Email already taken.';
    const patient = new Patient(params);
    patient.password = bcrypt.hashSync(patient.password, 10);
    return await patient.save();
}

async function authenticatePatient(params) {
    const patient = await Patient.findOne({ email: params.email });
    if (patient && bcrypt.compareSync(params.password, patient.password)) {
        const { password, ...patientWithoutPassword } = patient.toObject();
        const token = jwt.sign({ sub: patient.id }, config.secret);
        return { ...patientWithoutPassword, token };
    } throw 'Invalid Email or Password.';
}

async function updatePatient(params) {
    await Patient.updateOne({ _id: params.id }, {
        fullName: params.fullName
    }); return await Patient.findOne({ _id: params.id });
}

async function updatePatientCredentials(params) {
    let patient = await Patient.findOne({ email: params.email });
    if (patient && bcrypt.compareSync(params.password, patient.password)) {
        let conflictPatient = await Patient.findOne({ email: params.newEmail });
        if (!conflictPatient) {
            await Patient.updateOne({ _id: params.id }, {
                email: params.newEmail,
                password: bcrypt.hashSync(params.newPassword, 10) 
            });
            patient = await Patient.findOne({ email: params.newEmail });
            const { password, ...patientWithoutPassword } = patient.toObject();
            const token = jwt.sign({ sub: patient.id }, config.secret);
            return { ...patientWithoutPassword, token };
        } else throw 'Email already taken.';
    } else throw 'Invalid Email or Password.';
}

async function getPatientByID(params) {
    return await Patient.findOne({ _id: params.id }).select('-password');
}

module.exports = {
    registerPatient,
    authenticatePatient,
    updatePatientCredentials,
    updatePatient,
    getPatientByID
}
