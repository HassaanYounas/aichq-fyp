const mongoose = require('mongoose');

const SupervisorRequestSchema = new mongoose.Schema({
    Department: String,
    ProposalTitle: String,
    SupervisorEmail: String,
    SupervisorName: String,
    GroupID: String,
    Session: String,
    Year: String,
    Program: String,
    StudentOneRollNumber: String,
    StudentTwoRollNumber: String,
    Accepted: { type: Number, default: -1 },
    Timestamp: { type: Date, default: Date.now }
});

SupervisorRequestSchema.set('toJSON', { virtuals: true });
const SupervisorRequestModel = mongoose.model('SupervisorRequest', SupervisorRequestSchema);
module.exports = SupervisorRequestModel;