const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    Name: String,
    Programs: [{
        Title: String
    }]
});

DepartmentSchema.set('toJSON', { virtuals: true });
const DepartmentModel = mongoose.model('Department', DepartmentSchema);
module.exports = DepartmentModel;