const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    Year: Number,
    Program: String,
    TeamName: String,
    GroupUsername: String,
    Password: String,
    StudentOne: {
        Name: String,
        RollNumber: String,
        Email: String,
        Contact: String,
        CGPA: String,
        Verified: { type: Boolean, default: false }
    },
    StudentTwo: {
        Name: String,
        RollNumber: String,
        Email: String,
        Contact: String,
        CGPA: String,
        Verified: { type: Boolean, default: false }
    },
    Proposals: [{
        Domain: String,
        Title: String,
        Abstract: String,
        SupervisorUsername: String
    }],
    Supervisor: String,
    ProjectName: String,
    ProjectID: Number
});

GroupSchema.set('toJSON', { virtuals: true });
const GroupModel = mongoose.model('Group', GroupSchema);
module.exports = GroupModel;