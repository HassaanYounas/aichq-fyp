const mongoose = require('mongoose');

const SupervisorRequestSchema = new mongoose.Schema({
    ProposalTitle: String,
    SupervisorEmail: String,
    GroupID: String,
    Session: String,
    Year: String,
    Program: String,
    StudentOneRollNumber: String,
    StudentTwoRollNumber: String,
    Accepted: { type: Boolean, default: false },
    Rejected: { type: Boolean, default: false },
    Timestamp: { type: Date, default: Date.now }
});

SupervisorRequestSchema.set('toJSON', { virtuals: true });
const SupervisorRequestModel = mongoose.model('SupervisorRequest', SupervisorRequestSchema);
module.exports = SupervisorRequestModel;