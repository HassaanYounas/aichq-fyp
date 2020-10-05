const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Supervisor } = require('../models/index');
const mongoose = require('./mongoose');

async function addSupervisor(params) {
    if (await Supervisor.findOne({ Username: params.Username })) throw 'Username Already Exists.';
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
    } else throw 'Supervisor Does Not Exist.';
}

async function getSupervisors() {
    return await Supervisor.find();
}

module.exports = {
    addSupervisor,
    deleteSupervisor,
    getSupervisors
}