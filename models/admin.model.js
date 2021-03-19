const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    FullName: String,
	Username: String,
	Password: String,
    Department: String
});

AdminSchema.set('toJSON', { virtuals: true });
const AdminModel = mongoose.model('Admin', AdminSchema);
module.exports = AdminModel;