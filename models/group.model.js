const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    Year: {
        type: Number,
        require: true
    },
    Program: {
        type: String,
        required: true,
        trim: true
    },
    Status: {
        type: String,
        required: true,
        trim: true,
        default: 'Pending'
    },
    TeamName: {
        type: String,
        required: true,
        trim: true
    },
    Password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    StudentOne: {
        Name: {
            type: String,
            required: true,
            trim: true
        },
        RollNumber: {
            type: Number,
            required: true
        },
        Email: {
            type: String,
            required: true,
            trim: true
        },
        Contact: {
            type: Number,
            required: true
        },
        CGPA: {
            type: String,
            required: true
        }
    },
    StudentTwo: {
        Name: {
            type: String,
            required: true,
            trim: true
        },
        RollNumber: {
            type: Number,
            required: true
        },
        Email: {
            type: String,
            required: true,
            trim: true
        },
        Contact: {
            type: Number,
            required: true
        },
        CGPA: {
            type: String,
            required: true
        }
    },
    Proposals: [{
        Domain: {
            type: String,
            required: true,
            trim: true
        },
        Title: {
            type: String,
            required: true,
            trim: true
        },
        Abstract: {
            type: String,
            required: true,
            trim: true
        },
        SupervisorUsername: {
            type: String,
            required: true,
            trim: true
        }
    }],
    Supervisor: {
        type: String,
        trim: true
    },
    Project: {
        type: String,
        trim: true
    },
    ProjectID: {
        type: Number
    }
});

GroupSchema.set('toJSON', { virtuals: true });
const GroupModel = mongoose.model('Group', GroupSchema);
module.exports = GroupModel;