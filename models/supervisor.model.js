const mongoose = require('mongoose');

const SupervisorSchema = new mongoose.Schema({
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
        trim: true,
        default: '123456789'
    }
});

SupervisorSchema.set('toJSON', { virtuals: true });
const SupervisorModel = mongoose.model('Supervisor', SupervisorSchema);
module.exports = SupervisorModel;