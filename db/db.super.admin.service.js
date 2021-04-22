const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { SuperAdmin } = require('../models/index');
const mongoose = require('./mongoose');

async function createSuperAdmin(params) {
    const superAdmin = new SuperAdmin(params);
    superAdmin.Password = bcrypt.hashSync(superAdmin.Password, 10);
    return await superAdmin.save();
}

async function loginSuperAdmin(params) {
    const superAdmin = await SuperAdmin.findOne({ Username: params.Username });
    if (superAdmin && bcrypt.compareSync(params.Password, superAdmin.Password)) {
        const { Password, ...superAdminWithoutPassword } = superAdmin.toObject();
        const token = jwt.sign({ sub: superAdmin.id }, config.secret);
        return { ...superAdminWithoutPassword, token };
    } throw 'Invalid username or password.';
}

async function updateSuperAdmin(params) {
    await SuperAdmin.updateOne({}, {
        Username: params.Username,
        Password: bcrypt.hashSync(params.Password, 10)
    }); 
    const superAdmin = await SuperAdmin.findOne({});
    const { Password, ...superAdminWithoutPassword } = superAdmin.toObject();
    return { ...superAdminWithoutPassword };
}

module.exports = {
    createSuperAdmin,
    loginSuperAdmin,
    updateSuperAdmin
}