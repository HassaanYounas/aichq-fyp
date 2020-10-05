const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        trim: true
    },
	Username: {
        type: String,
        required: true,
        trim: true
    },
	Password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    }
});

AdminSchema.set('toJSON', { virtuals: true });
const AdminModel = mongoose.model('Admin', AdminSchema);
module.exports = AdminModel;