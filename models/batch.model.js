const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    Year: Number,
    Program: String,
    Phase: Number,
    Completed: { type: Boolean, default: false },
    Supervisors: [{
        Username: String,
        Proposals: [{
            Title: String,
            Abstract: String,
            Domain: String
        }]
    }],
    Students: [{
        RollNumber: Number
    }]
});

BatchSchema.set('toJSON', { virtuals: true });
const BatchModel = mongoose.model('Batch', BatchSchema);
module.exports = BatchModel;