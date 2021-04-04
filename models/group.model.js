const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    Department: String,
    Program: String,
    Session: String,
    Year: String,
    TeamName: String,
    Username: String,
    Password: String,
    ProjectTitle: String,
    ProjectID: Number,
    SupervisorEmail: String,
    SupervisorName: String,
    StudentOne: {
        RollNumber: String,
        Contact: String,
        CGPA: String
    },
    StudentTwo: {
        RollNumber: String,
        Contact: String,
        CGPA: String
    }
});

GroupSchema.set('toJSON', { virtuals: true });
const GroupModel = mongoose.model('Group', GroupSchema);
module.exports = GroupModel;