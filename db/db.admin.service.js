const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Admin } = require('../models/index');
const mongoose = require('./mongoose');

async function createAdmin(params) {
    const admin = new Admin(params);
    admin.Password = bcrypt.hashSync(admin.Password, 10);
    return await admin.save();
}

async function loginAdmin(params) {
    const admin = await Admin.findOne({ Username: params.Username });
    if (admin && bcrypt.compareSync(params.Password, admin.Password)) {
        const { Password, ...adminWithoutPassword } = admin.toObject();
        const token = jwt.sign({ sub: admin.id }, config.secret);
        return { ...adminWithoutPassword, token };
    } throw 'Invalid username or password.';
}

async function updateAdmin(params) {
    await Admin.updateOne({}, {
        FullName: params.FullName,
        Username: params.Username,
        Password: bcrypt.hashSync(params.Password, 10)
    }); return await Admin.findOne({});
}

async function getAdmin() {
    const admin = await Admin.findOne();
    const { Password, ...adminWithoutPassword } = admin.toObject();
    return adminWithoutPassword;
}

module.exports = {
    createAdmin,
    loginAdmin,
    updateAdmin,
    getAdmin
}