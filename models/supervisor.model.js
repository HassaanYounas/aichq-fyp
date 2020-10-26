const mongoose = require('mongoose');

const SupervisorSchema = new mongoose.Schema({
	Active: {
		type: Boolean,
		default: true
	},
	FullName: String,
	Email: String,
	Password: String,
	Department: String,
	Designation: String,
    Proposals: [{
        Domain: String,
        Title: String,
        Abstract: String
	}]
});

SupervisorSchema.set('toJSON', { virtuals: true });
const SupervisorModel = mongoose.model('Supervisor', SupervisorSchema);
module.exports = SupervisorModel;