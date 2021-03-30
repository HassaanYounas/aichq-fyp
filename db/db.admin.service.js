const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Admin } = require('../models/index');
const mongoose = require('./mongoose');

async function loginAdmin(params) {
    const admin = await Admin.findOne({ Email: params.Email });
    if (admin && bcrypt.compareSync(params.Password, admin.Password)) {
        const { Password, ...adminWithoutPassword } = admin.toObject();
        const token = jwt.sign({ sub: admin.id }, config.secret);
        return { ...adminWithoutPassword, token };
    } throw 'Invalid email or password.';
}

async function updateAdmin(params) {
    await Admin.updateOne({}, {
        FullName: params.FullName,
        Username: params.Username,
        Password: bcrypt.hashSync(params.Password, 10)
    }); return await Admin.findOne({});
}

async function getAdmin(params) {
    const admin = await Admin.findOne({ _id: params._id });
    const { Password, ...adminWithoutPassword } = admin.toObject();
    return adminWithoutPassword;
}

module.exports = {
    loginAdmin,
    updateAdmin,
    getAdmin
}