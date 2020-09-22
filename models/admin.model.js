const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        trim: true,
        default: 'Administrator'
    },
	Username: {
        type: String,
        required: true,
        trim: true,
        default: 'admin'
    },
	Password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true,
        default: '123456789'
    }
});

AdminSchema.set('toJSON', { virtuals: true });
const AdminModel = mongoose.model('Admin', AdminSchema);
module.exports = AdminModel;