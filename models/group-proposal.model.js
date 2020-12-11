const mongoose = require('mongoose');

const GroupProposalSchema = new mongoose.Schema({
    Session: String,
	Year: String,
    Department: String,
	Program: String,
	Domain: String,
    Title: String,
	Abstract: String,
	Username: String,
	SupervisorUsername: String
});

GroupProposalSchema.set('toJSON', { virtuals: true });
const GroupProposalModel = mongoose.model('GroupProposal', GroupProposalSchema);
module.exports = GroupProposalModel;