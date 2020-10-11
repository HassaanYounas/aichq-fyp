const mongoose = require('mongoose');

const SupervisorSchema = new mongoose.Schema({
    Username: String,
	Password: String,
	FullName: String
});

SupervisorSchema.set('toJSON', { virtuals: true });
const SupervisorModel = mongoose.model('Supervisor', SupervisorSchema);
module.exports = SupervisorModel;