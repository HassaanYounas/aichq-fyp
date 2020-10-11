const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Supervisor } = require('../models/index');
const mongoose = require('./mongoose');

async function loginSupervisor(params) {
    const supervisor = await Supervisor.findOne({ Username: params.Username });
    if (supervisor && bcrypt.compareSync(params.Password, supervisor.Password)) {
        const { Password, ...supervisorWithoutPassword } = supervisor.toObject();
        const token = jwt.sign({ sub: supervisor.id }, config.secret);
        return { ...supervisorWithoutPassword, token };
    } throw 'Invalid username or password.';
}

async function addSupervisor(params) {
    if (await Supervisor.findOne({ Username: params.Username })) throw 'Username already exists.';
    else {
        const supervisor = new Supervisor(params);
        supervisor.Password = bcrypt.hashSync(supervisor.Password, 10);
        return await supervisor.save();
    }
}

async function deleteSupervisor(params) {
    if (await Supervisor.findOne({ Username: params.Username })) {
        await Supervisor.deleteOne({ Username: params.Username }, err => {
            if (err) throw err;
        });
    } else throw 'Supervisor does not exist.';
}

async function getSupervisors() {
    return await Supervisor.find();
}

module.exports = {
    loginSupervisor,
    addSupervisor,
    deleteSupervisor,
    getSupervisors
}