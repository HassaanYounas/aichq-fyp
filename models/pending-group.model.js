const mongoose = require('mongoose');

const PendingGroupSchema = new mongoose.Schema({
    Department: String,
    Program: String,
    Session: String,
    Year: String,
    Username: String,
    Password: String,
    StudentOne: {
        RollNumber: String,
        Verified: {
            type: Boolean,
            default: false
        }
    },
    StudentTwo: {
        RollNumber: String,
        Verified: {
            type: Boolean,
            default: false
        }
    },
    CreatedAt: { type: Date, expires: '10080m', default: Date.now }
});

PendingGroupSchema.set('toJSON', { virtuals: true });
const PendingGroupModel = mongoose.model('PendingGroup', PendingGroupSchema);
module.exports = PendingGroupModel;