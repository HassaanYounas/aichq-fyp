const mongoose = require('mongoose');

const GroupTokenSchema = new mongoose.Schema({
    RollNumber: Number,
    Token: String,
    CreatedAt: { type: Date, expires: '5m', default: Date.now }
});

GroupTokenSchema.set('toJSON', { virtuals: true });
const GroupToken = mongoose.model('GroupToken', GroupTokenSchema);
module.exports = GroupToken;