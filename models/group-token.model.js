const mongoose = require('mongoose');

const GroupTokenSchema = new mongoose.Schema({
    RollNumber: String,
    Token: String,
    CreatedAt: { type: Date, expires: '10080m', default: Date.now }
});

GroupTokenSchema.set('toJSON', { virtuals: true });
const GroupToken = mongoose.model('GroupToken', GroupTokenSchema);
module.exports = GroupToken;