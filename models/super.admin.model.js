const mongoose = require('mongoose');

const SuperAdminSchema = new mongoose.Schema({
	Username: String,
	Password: String
});

SuperAdminSchema.set('toJSON', { virtuals: true });
const SuperAdminModel = mongoose.model('SuperAdmin', SuperAdminSchema);
module.exports = SuperAdminModel;