const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    Year: {
        type: Number,
        require: true
    },
    Department: {
        type: String,
        required: true,
        trim: true
    },
    Phase: {
        type: Number,
        required: true
    },
    Supervisors: [{
        Username: {
            type: String,
            trim: true
        },
        Proposals: [{
            Domain: {
                type: String,
                trim: true
            },
            Title: {
                type: String,
                trim: true
            },
            Abstract: {
                type: String,
                trim: true
            }
        }]
    }],
    Students: [{
        RollNumber: {
            type: Number
        }
    }]
});

BatchSchema.set('toJSON', { virtuals: true });
const BatchModel = mongoose.model('Batch', BatchSchema);
module.exports = BatchModel;