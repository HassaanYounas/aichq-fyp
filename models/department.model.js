const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    DirectorName: String,
    Email: String,
    Password: String,
    Name: String,
    Programs: [{
        Title: String,
        Batches: [{
            Archived: {
                type: Boolean,
                default: false
            },
            Session: String,
            Year: String,
            MaxGroups: {
                type: Number,
                default: 0
            },
            Students: [{
                FullName: String,
                RollNumber: String,
                Contact: String,
                Phase: {
                    type: Number,
                    default: 0
                },
                Group: {
                    type: Boolean,
                    default: false
                }
            }],
            Groups: [{
                ProjectTitle: String,
                Username: String,
                Password: String,
                SupervisorEmail: String,
                SupervisorName: String,
                StudentOne: {
                    FullName: String,
                    RollNumber: String,
                    Contact: String,
                    CGPA: String
                },
                StudentTwo: {
                    FullName: String,
                    RollNumber: String,
                    Contact: String,
                    CGPA: String
                },
                SupervisorRequests: [{
                    ProposalTitle: String,
                    SupervisorEmail: String,
                    Accepted: {
                        type: Number,
                        default: -1
                    },
                    Timestamp: {
                        type: Date,
                        default: Date.now()
                    }
                }]
            }]
        }]
    }],
    Supervisors: [{
        Active: {
            type: Boolean,
            default: true
        },
        FullName: String,
        Email: String,
        Password: String,
        Designation: String,
        Proposals: [{
            BatchID: String,
            Domain: String,
            Title: String,
            Abstract: String,
            Approved: {
                type: Number,
                default: -1
            }
        }]
    }]
});

DepartmentSchema.set('toJSON', { virtuals: true });
const DepartmentModel = mongoose.model('Department', DepartmentSchema);
module.exports = DepartmentModel;