const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Batch, Group, GroupToken } = require('../models/index');
const mongoose = require('./mongoose');
const nodemailer = require('nodemailer');

function generateToken(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } return result;
}

async function sendEmail(Student, Program, Year, Host, StudentNumber, OtherStudent) {
    const groupToken = new GroupToken({ RollNumber: Student.RollNumber, Token: generateToken(64)});
    const transporter = nodemailer.createTransport({
        service: 'zoho', auth: { user: 'aichq.fyp@zohomail.com', pass: 'HTAichQ@123' }
    });
    let mailOptions = {
        from: 'aichq.fyp@zohomail.com',
        to: Student.Email,
        subject: 'AichQ | FYP Group Verfication | Request from ' + OtherStudent.Name,
        text:
            'Hello, ' + Student.Name + ' (' + Student.RollNumber + ').' + '\n\n' +
            'By clicking on the link below you agree to make FYP Group with ' + OtherStudent.Name + ' (' + OtherStudent.RollNumber + '):\n\n' +
            'http:\/\/' + Host + '\/api\/group\/verify\/' 
            + Student.RollNumber + '\/'+ Program + '\/' 
            + Year + '\/' + groupToken.Token + '\/' + StudentNumber + '\n'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) throw 'Unable to send email. Please try again.';
    });
    return await groupToken.save();
}

async function registerGroup(params, req) {
    const batch = await Batch.findOne({ Year: params.Year, Program: params.Program });
    if (batch) {
        let count = 0;
        const students = batch.Students;
        for (let i = 0; i < students.length; i++) {
            if (parseInt(students[i].RollNumber) === parseInt(params.StudentOne.RollNumber) ||
                parseInt(students[i].RollNumber) === parseInt(params.StudentTwo.RollNumber)   
            ) count++;
        }
        if (count === 2) {
            if (await Group.findOne({
                'StudentOne.RollNumber': params.StudentOne.RollNumber,
                'StudentTwo.RollNumber': params.StudentTwo.RollNumber,
            })) throw 'Group already exists.';
            try {
                sendEmail(params.StudentOne, params.Program, params.Year, req.headers.host, 'One', params.StudentTwo);
                sendEmail(params.StudentTwo, params.Program, params.Year, req.headers.host, 'Two', params.StudentOne);
            } catch (err) {
                throw err;
            }
            if (await Group.findOne({ GroupUsername: params.GroupUsername })) throw 'Team name already exists.';
            const group = new Group(params);
            group.Password = bcrypt.hashSync(group.Password, 10);
            return await group.save();
        } else throw 'One of the roll numbers does not exist in batch.';
    } else throw 'Batch does not exist.';
}

async function verifyGroup(params) {
    if (await GroupToken.findOne({ RollNumber: params.RollNumber, Token: params.Token })) {
        if (params.Student === 'One') {
            await Group.updateOne(
                { Year: params.Year, Program: params.Program, 'StudentOne.RollNumber': params.RollNumber }, 
                { 'StudentOne.Verified': true }
            );
            return await GroupToken.deleteOne({ RollNumber: params.RollNumber }, err => {
                throw err;
            });
        } else if (params.Student === 'Two'){
            await Group.updateOne(
                { Year: params.Year, Program: params.Program, 'StudentTwo.RollNumber': params.RollNumber }, 
                { 'StudentTwo.Verified': true }
            );
            return await GroupToken.deleteOne({ RollNumber: params.RollNumber }, err => {
                throw err;
            });
        }
    } throw 'Link is either invalid or has expired.';
}

async function resendTokenGroup(params, req) {
    if (await Batch.findOne({ Year: params.Year, Program: params.Program })) {
        if (await GroupToken.findOne({ RollNumber: params.StudentOne.RollNumber })) {
            await GroupToken.deleteOne({ RollNumber: params.StudentOne.RollNumber }, err => {
                throw err;
            });
        }
        if (await GroupToken.findOne({ RollNumber: params.StudentTwo.RollNumber })) {
            await GroupToken.deleteOne({ RollNumber: params.StudentTwo.RollNumber }, err => {
                throw err;
            });
        }
        sendEmail(params.StudentOne, params.Program, params.Year, req.headers.host, 'One', params.StudentTwo);
        sendEmail(params.StudentTwo, params.Program, params.Year, req.headers.host, 'Two', params.StudentOne);
        return {};
    } else throw 'Batch does not exist.';
}

module.exports = {
    registerGroup,
    verifyGroup,
    resendTokenGroup
}