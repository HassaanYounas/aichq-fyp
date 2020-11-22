const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Supervisor } = require('../models/index');
const mongoose = require('./mongoose');
const nodemailer = require('nodemailer');

function generatePassword(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } return result;
}

function sendEmail(supervisor) {
    const transporter = nodemailer.createTransport({
        service: 'zoho', auth: { user: 'aichq.fyp@zohomail.com', pass: 'HTAichQ@123' }
    });
    let mailOptions = {
        from: 'aichq.fyp@zohomail.com',
        to: supervisor.Email,
        subject: 'AichQ | FYP Supervisor | Account Information',
        text: `Respected ${supervisor.FullName},\n\nYou have been registered as an FYP Supervisor for ${supervisor.Department} department.\n\nYour login credentials for AichQ are:\nEmail: ${supervisor.Email}\nPassword: ${supervisor.Password}\n\nYou can access AichQ from here: aichq-fyp.herokuapp.com\n\nRegards, AichQ Team.`
    };
    transporter.sendMail(mailOptions, (error) => {
        if (error) throw 'Unable to send email. Please try again.';
    });
}

async function loginSupervisor(params) {
    const supervisor = await Supervisor.findOne({ Email: params.Email });
    if (supervisor && bcrypt.compareSync(params.Password, supervisor.Password)) {
        const { Password, ...supervisorWithoutPassword } = supervisor.toObject();
        const token = jwt.sign({ sub: supervisor.id }, config.secret);
        return { ...supervisorWithoutPassword, token };
    } throw 'Invalid email or password.';
}

async function addSupervisor(params) {
    if (await Supervisor.findOne({ Email: params.Email })) throw 'Email already exists.';
    else {
        const supervisor = new Supervisor(params);
        supervisor.Password = generatePassword(8);
        sendEmail(supervisor);
        supervisor.Password = bcrypt.hashSync(supervisor.Password, 10);
        return await supervisor.save();
    }
}

async function getSupervisors() {
    return await Supervisor.find();
}

module.exports = {
    loginSupervisor,
    addSupervisor,
    getSupervisors
}