const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Supervisor, SupervisorProposal, SupervisorRequest } = require('../models/index');
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
        host: 'smtp.mailtrap.io', port: 2525,
        auth: { user: 'a36d2a20fc0a61', pass: '6c9e693d3d4cc6' }
    });
    let mailOptions = {
        from: 'no.reply@aichq.com',
        to: supervisor.Email,
        subject: 'AichQ | FYP Supervisor | Account Information',
        text: `Respected ${supervisor.FullName},\n\nYou have been registered as an FYP Supervisor for ${supervisor.Department} department.\n\nYour login credentials for AichQ are:\nEmail: ${supervisor.Email}\nPassword: ${supervisor.Password}\n\nYou can access AichQ from here: aichq-fyp.herokuapp.com\n\nRegards, AichQ Team.`
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
                return;
            } resolve(info);
        });
    });
}

async function loginSupervisor(params) {
    const supervisor = await Supervisor.findOne({ Email: params.Email });
    if (supervisor && bcrypt.compareSync(params.Password, supervisor.Password)) {
        const { Password, ...supervisorWithoutPassword } = supervisor.toObject();
        if (!supervisorWithoutPassword.Active) throw 'Your account is currently inactive.';
        const token = jwt.sign({ sub: supervisor.id }, config.secret);
        return { ...supervisorWithoutPassword, token };
    } throw 'Invalid email or password.';
}

async function addSupervisor(params) {
    if (await Supervisor.findOne({ Email: params.Email })) throw 'Email already exists.';
    else {
        const supervisor = new Supervisor(params);
        // supervisor.Password = generatePassword(8);
        supervisor.Password = '123456789';
        for (let i = 0; i < 2; i++) {
            try {
                info = await sendEmail(supervisor);
                break;
            } catch (e) {
                error = e;
            }
        }
        supervisor.Password = bcrypt.hashSync(supervisor.Password, 10);
        return await supervisor.save();
    }
}

async function setSupervisorInactive(params) {
    if (await Supervisor.findOne({ Email: params.Email })) {
        await Supervisor.updateOne({ Email: params.Email }, { Active: false });
    } else throw 'Supervisor does not exist.';
}

async function setSupervisorActive(params) {
    if (await Supervisor.findOne({ Email: params.Email })) {
        await Supervisor.updateOne({ Email: params.Email }, { Active: true });
    } else throw 'Supervisor does not exist.';
}

async function submitSupervisorProposal(params) {
    const proposal = new SupervisorProposal(params);
    return await proposal.save();
}

async function getSupervisorProposals(params) {
    if ('Department' in params) 
        return await SupervisorProposal.find({ Department: params.Department });
    else if ('Email' in params) 
        return await SupervisorProposal.find({ Email: params.Email });
    else
        return await SupervisorProposal.find({
            Program: params.Program,
            Session: params.Session,
            Year: params.Year,
            Approved: params.Approved,
        });
}

async function updateSupervisorProposal(params) {
    return await SupervisorProposal.updateOne(
        { _id: params._id }, 
        { Approved: params.Approved }
    );
}

async function addSupervisionRequest(params) {
    if (await SupervisorRequest.findOne({ 
        SupervisorEmail: params.SupervisorEmail,
        GroupID: params.GroupID
    })) throw 'You can cannot send multiple requests to the same supervisor. The supervisor needs to reject your previous request to be able to receive a new request.';
    const request = new SupervisorRequest(params);
    return await request.save();
}

async function getSupervisionRequests(params) {
    if ('Email' in params)
        return await SupervisorRequest.find({ SupervisorEmail: params.Email });
    else 
        return await SupervisorRequest.find({ GroupID: params.GroupID });
}

async function updateSupervisionRequest(params) {
    return await SupervisorRequest.updateOne(
        { _id: params._id },
        { Accepted: params.Accepted }
    );
}

async function getSupervisors(params) {
    return await Supervisor.find({ Department: params.Department });
}

async function getSupervisor(params) {
    return await Supervisor.findOne({ _id: params._id });
}

module.exports = {
    loginSupervisor,
    addSupervisor,
    setSupervisorActive,
    setSupervisorInactive,
    submitSupervisorProposal,
    getSupervisorProposals,
    updateSupervisorProposal,
    addSupervisionRequest,
    getSupervisionRequests,
    updateSupervisionRequest,
    getSupervisors,
    getSupervisor
}