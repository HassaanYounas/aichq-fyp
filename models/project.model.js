const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    Department: String,
    Program: String,
    Session: String,
    Year: String,
    ID: Number,
    Name: String,
    Title: String,
    Area: String,
    Type: String,
    EndUsers: String,
    Platform: String,
    Technology: String,
    SupervisorUsername: String
});

ProjectSchema.set('toJSON', { virtuals: true });
const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;