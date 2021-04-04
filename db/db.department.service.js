const { Department, Admin } = require('../models/index');
const nodemailer = require('nodemailer');
const mongoose = require('./mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');

function generatePassword(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } return result;
}

function sendEmail(admin) {
    const transporter = nodemailer.createTransport({
       host: 'smtp.mailtrap.io', port: 2525,
       auth: { user: 'a36d2a20fc0a61', pass: '6c9e693d3d4cc6' }
   });
   let mailOptions = {
       from: 'no.reply@aichq.com',
       to: admin.Email,
       subject: 'AichQ | FYP Director | ' + admin.Department,
       text: `Respected ${admin.FullName},\n\nYou have been appointed as FYP Director for ${admin.Department} department.\n\nYour login credentials for AichQ are:\nEmail: ${admin.Email}\nPassword: ${admin.Password}\n\nYou can access AichQ from here: aichq-fyp.herokuapp.com\n\nRegards, AichQ Team.`
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

async function addDepartment(params) {
    if (await Department.findOne({ Name: params.Department })) 
        throw 'Department already exists.';
    if (await Admin.findOne({ Email: params.Email }))
        throw 'Email already exists.';        
    const department = new Department({ Name: params.Department });
    const admin = new Admin({ 
        FullName: params.FullName,
        Department: params.Department,
        Password: generatePassword(8),
        Email: params.Email
    });
    for (let i = 0; i < 2; i++) {
        try {
            info = await sendEmail(admin);
            break;
        } catch (e) {
            error = e;
        }
    }
    admin.Password = bcrypt.hashSync(admin.Password, 10);
    await admin.save();
    return await department.save();
}

async function addProgram(params) {
    if (await Department.findOne({ Name: params.Department })) {
        if (await Department.findOne({
            Name: params.Department, 
            'Programs.Title': params.Title
        })) throw 'Program already exists in department.';
        return await Department.updateOne(
            { Name: params.Department, }, 
            { $push: { Programs: {
                Title: params.Title
            } } }
        );
    } else throw 'Department does not exist.';
}

async function getPrograms(params) {
    return await Department.findOne({ Name: params.Name });
}

async function getDepartments(params) {
    return await Department.find();
}

module.exports = {
    addDepartment,
    addProgram,
    getPrograms,
    getDepartments
}