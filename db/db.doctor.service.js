const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Doctor } = require('../models/index');
const mongoose = require('./mongoose');

async function registerDoctor(params) {
    if (await Doctor.findOne({ email: params.email })) throw 'Email already taken.';
    const doctor = new Doctor(params);
    doctor.password = bcrypt.hashSync(doctor.password, 10);
    return await doctor.save();
}

async function authenticateDoctor(params) {
    const doctor = await Doctor.findOne({ email: params.email });
    if (doctor && bcrypt.compareSync(params.password, doctor.password)) {
        const { password, ...doctorWithoutPassword } = doctor.toObject();
        const token = jwt.sign({ sub: doctor.id }, config.secret);
        return { ...doctorWithoutPassword, token };
    } throw 'Invalid Email or Password.';
}

async function updateDoctor(params) {
    await Doctor.updateOne({ _id: params.id }, {
        fullName: params.fullName,
        cellularNumber: params.cellularNumber,
        qualification: params.qualification,
        workingDays: params.workingDays,
        workingHours: params.workingHours,
        address: params.address,
        description: params.description,
        fee: params.fee
    });
    return await Doctor.findOne({ _id: params.id });
}

async function updateDoctorCredentials(params) {
    let doctor = await Doctor.findOne({ email: params.email });
    if (doctor && bcrypt.compareSync(params.password, doctor.password)) {
        let conflictDoctor = await Doctor.findOne({ email: params.newEmail });
        if (!conflictDoctor) {
            await Doctor.updateOne({ _id: params.id }, {
                email: params.newEmail,
                password: bcrypt.hashSync(params.newPassword, 10)
            });
            doctor = await Doctor.findOne({ email: params.newEmail });
            const { password, ...doctorWithoutPassword } = doctor.toObject();
            const token = jwt.sign({ sub: doctor.id }, config.secret);
            return { ...doctorWithoutPassword, token };
        } else throw 'Email already taken.';
    } else throw 'Invalid Email or Passowrd';
}

async function addRating(params) {
    const rating = params.patientId + '-' + params.rating;
    const doctor = await Doctor.findOne({ _id: params.doctorId });
    let patientIds = [];
    doctor.ratings.forEach(e => {
        patientIds.push(e.split('-')[0]);
    });
    if (patientIds.includes(params.patientId)) {
        const oldRating = doctor.ratings[patientIds.indexOf(params.patientId)];
        await Doctor.findOneAndUpdate({ _id: params.doctorId }, { 
            $pull: { ratings: { $in: [ oldRating ] }}
        });
    } await Doctor.findOneAndUpdate({ _id: params.doctorId }, { $push: { ratings: rating }});
    return await Doctor.findOne({ _id: params.doctorId });
}

async function getDoctorByID(params) {
    return await Doctor.findOne({ _id: params.id }).select('-password');
}

async function getAllDoctors() {
    return await Doctor.find().select('-password');
}

module.exports = {
    registerDoctor,
    authenticateDoctor,
    updateDoctor,
    updateDoctorCredentials,
    addRating,
    getDoctorByID,
    getAllDoctors
}
