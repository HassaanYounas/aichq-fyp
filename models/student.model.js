const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    Department: String,
    Program: String,
    Session: String,
    Year: String,
    FullName: String,
    RollNumber: String,
    Group: {
        type: Boolean,
        default: false
    },
    Phase: {
        type: Number,
        default: 1
    }
});

StudentSchema.set('toJSON', { virtuals: true });
const StudentModel = mongoose.model('Student', StudentSchema);
module.exports = StudentModel;