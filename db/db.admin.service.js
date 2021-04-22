const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Department } = require('../models/index');
const mongoose = require('./mongoose');

async function loginAdmin(params) {
    const department = await Department.findOne({ Email: params.Email });
    if (department && bcrypt.compareSync(params.Password, department.Password)) {
        let admin = {
            Department: department.Name,
            FullName: department.DirectorName,
            Email: department.Email
        }
        const token = jwt.sign({ sub: department.id }, config.secret);
        return { ...admin, token };
    } throw 'Invalid email or password.';
}

module.exports = {
    loginAdmin
}