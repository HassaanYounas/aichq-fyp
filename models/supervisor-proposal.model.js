const mongoose = require('mongoose');

const SupervisorProposalSchema = new mongoose.Schema({
    Session: String,
	Year: String,
    Department: String,
	Program: String,
	Domain: String,
    Title: String,
	Abstract: String,
	Email: String
});

SupervisorProposalSchema.set('toJSON', { virtuals: true });
const SupervisorProposalModel = mongoose.model('SupervisorProposal', SupervisorProposalSchema);
module.exports = SupervisorProposalModel;