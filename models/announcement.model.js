const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
    Department: String,
    Program: String,
    Batch: String,
    Title: String,
    Body: String,
    Filename: String,
    Date: {
        type: Date,
        default: Date.now
    }
});

AnnouncementSchema.set('toJSON', { virtuals: true });
const Announcement = mongoose.model('Announcement', AnnouncementSchema);
module.exports = Announcement;