const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
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
    },
    cellularNumber: {
        type: String,
        trim: true,
        unique: true,
        default: ''
    },
    qualification: {
        type: String,
        trim: true,
        default: ''
    },
    workingDays: {
        type: String,
        trim: true,
        default: ''
    },
    workingHours: {
        type: String,
        trim: true,
        default: ''
    },
    address: {
        type: String,
        trim: true,
        default: ''
    },
    fee: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    ratings: {
        type: [String]
    }
});

DoctorSchema.set('toJSON', { virtuals: true });
const DoctorModel = mongoose.model('Doctor', DoctorSchema);
module.exports = DoctorModel;
