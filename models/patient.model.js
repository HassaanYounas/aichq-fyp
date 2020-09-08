const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    }
});

PatientSchema.set('toJSON', { virtuals: true });
const PatientModel = mongoose.model('Patient', PatientSchema);
module.exports = PatientModel;
