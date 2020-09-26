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
    } throw 'Invalid Username or Password.';
}

async function updateAdmin(params) {
    await Admin.updateOne({ Username: params.Username }, {
        FullName: params.NewFullName,
        Username: params.NewUsername,
        Password: bcrypt.hashSync(params.NewPassword, 10)
    }); return await Admin.findOne({ Username: params.NewUsername });
}

module.exports = {
    createAdmin,
    loginAdmin,
    updateAdmin
}