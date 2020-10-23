const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    Archived: {
        type: Boolean,
        default: false
    },
    Session: String,
	Year: String,
    Department: String,
	Program: String
});

BatchSchema.set('toJSON', { virtuals: true });
const BatchModel = mongoose.model('Batch', BatchSchema);
module.exports = BatchModel;