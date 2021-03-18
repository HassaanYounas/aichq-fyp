const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Student, Group, PendingGroup, GroupToken } = require('../models/index');
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

async function loginGroup(params) {
    const group = await Group.findOne({ Username: params.Username });
    if (group && bcrypt.compareSync(params.Password, group.Password)) {
        const { Password, ...groupWithoutPassword } = group.toObject();
        const token = jwt.sign({ sub: group.id }, config.secret);
        return { ...groupWithoutPassword, token };
    } throw 'Invalid username or password.';
}

async function sendEmail(Student, Host, StudentNumber, OtherStudent, GroupID) {
    const groupToken = new GroupToken({ RollNumber: Student.RollNumber, Token: generateToken(64)});
    const transporter = nodemailer.createTransport({
        service: 'zoho', auth: { user: 'aichq.fyp@zohomail.com', pass: 'HTAichQ@123' }
    });
    let mailOptions = {
        from: 'aichq.fyp@zohomail.com',
        to: '170273@students.au.edu.pk',
        subject: 'AichQ | FYP Group Verfication | Request from ' + OtherStudent.FullName,
        text:
            'Hello, ' + Student.FullName + ' (' + Student.RollNumber + ').' + '\n\n' +
            'By clicking on the link below you agree to make FYP Group with ' + OtherStudent.FullName + ' (' + OtherStudent.RollNumber + '):\n\n' +
            'http:\/\/' + Host + '\/api\/group\/verify\/' 
            + Student.RollNumber + '\/' + groupToken.Token + '\/' + StudentNumber + '\/' + GroupID + '\n'
    };
    transporter.sendMail(mailOptions, (error) => {
        console.log('Mail sent');
        if (error) throw 'Unable to send email. Please try again.';
    }); return await groupToken.save();
}

async function registerGroup(params, req) {
    if (
        await Student.findOne({ 
            Department: params.Department,
            Program: params.Program,
            Session: params.Session,
            Year: params.Year,
            FullName: params.StudentOne.FullName, 
            RollNumber: params.StudentOne.RollNumber,

        }) &&
        await Student.findOne({
            Department: params.Department,
            Program: params.Program,
            Session: params.Session,
            Year: params.Year,
            FullName: params.StudentTwo.FullName, 
            RollNumber: params.StudentTwo.RollNumber 
        })
    ) {
        if (await PendingGroup.findOne({ Username: params.Username })) throw 'Username already exists.';
        else {
            if (
                await Group.findOne({ 
                    'StudentOne.RollNumber': params.StudentOne.RollNumber
                }) || 
                await Group.findOne({
                    'StudentTwo.RollNumber': params.StudentTwo.RollNumber
                }) ||
                await Group.findOne({ 
                    'StudentTwo.RollNumber': params.StudentOne.RollNumber
                }) || 
                await Group.findOne({
                    'StudentOne.RollNumber': params.StudentTwo.RollNumber
                })
            ) throw 'One of the members has already verified their group. :(';
            else {
                try {
                    const pendingGroup = new PendingGroup(params);
                    sendEmail(params.StudentOne, req.headers.host, 'One', params.StudentTwo, pendingGroup._id);
                    sendEmail(params.StudentTwo, req.headers.host, 'Two', params.StudentOne, pendingGroup._id);
                    pendingGroup.Password = bcrypt.hashSync(pendingGroup.Password, 10);
                    return await pendingGroup.save();
                } catch (err) { throw err; }
            }
        }
    } throw 'One of the students does not exist.';
}

async function verifyGroup(params) {
    if (await GroupToken.findOne({ RollNumber: params.RollNumber, Token: params.Token })) {
        if (params.Student == 'One') {
            const pendingGroup = await PendingGroup.findOne({ _id: params.GroupID });
            pendingGroup.StudentOne.Verified = true;
            if (pendingGroup.StudentTwo.Verified === true) {
                createGroup(pendingGroup);
                await PendingGroup.deleteOne({ _id: params.GroupID });
            } else await pendingGroup.save();
            return await GroupToken.deleteOne({ RollNumber: params.RollNumber });
        } else if (params.Student == 'Two') {
            const pendingGroup = await PendingGroup.findOne({ _id: params.GroupID });
            pendingGroup.StudentTwo.Verified = true;
            if (pendingGroup.StudentOne.Verified === true) {
                createGroup(pendingGroup);
                await PendingGroup.deleteOne({ _id: params.GroupID });
            } else await pendingGroup.save();
            return await GroupToken.deleteOne({ RollNumber: params.RollNumber });
        }
    } throw 'Link is either invalid or has expired.';
}

async function createGroup(pendingGroup) {
    const group = new Group();
    group.Department = pendingGroup.Department;
    group.Program = pendingGroup.Program;
    group.Session = pendingGroup.Session;
    group.Year = pendingGroup.Year;
    group.Username = pendingGroup.Username;
    group.Password = pendingGroup.Password;
    group.StudentOne.RollNumber = pendingGroup.StudentOne.RollNumber;
    group.StudentTwo.RollNumber = pendingGroup.StudentTwo.RollNumber;
    group.Password = pendingGroup.Password;
    await group.save();
}

async function getGroups() {
    let groupsWithoutPassword = [];
    let groups = await Group.find();
    for (let i = 0; i < groups.length; i++) {
        const { Password, ...groupWithoutPassword } = groups[i].toObject();
        groupsWithoutPassword.push(groupWithoutPassword);
    }
    return groupsWithoutPassword;
}

module.exports = {
    loginGroup,
    registerGroup,
    verifyGroup,
    getGroups
}