const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../helpers/config.json');
const { Admin } = require('../models/index');
const mongoose = require('./mongoose');
const nodemailer = require('nodemailer');

// function generatePassword(length) {
//     let result = '';
//     let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let charactersLength = characters.length;
//     for (let i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     } return result;
// }

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

async function createAdmin(params) {
    const admin = new Admin(params);
    for (let i = 0; i < 3; i++) {
        try {
            info = await sendEmail(admin);
            break;
        } catch (e) {
            error = e;
        }
    }
    admin.Password = bcrypt.hashSync(admin.Password, 10);
    return await admin.save();
}

async function loginAdmin(params) {
    const admin = await Admin.findOne({ Email: params.Email });
    if (admin && bcrypt.compareSync(params.Password, admin.Password)) {
        const { Password, ...adminWithoutPassword } = admin.toObject();
        const token = jwt.sign({ sub: admin.id }, config.secret);
        return { ...adminWithoutPassword, token };
    } throw 'Invalid email or password.';
}

async function updateAdmin(params) {
    await Admin.updateOne({}, {
        FullName: params.FullName,
        Username: params.Username,
        Password: bcrypt.hashSync(params.Password, 10)
    }); return await Admin.findOne({});
}

async function getAdmin(params) {
    const admin = await Admin.findOne({ _id: params._id });
    const { Password, ...adminWithoutPassword } = admin.toObject();
    return adminWithoutPassword;
}

module.exports = {
    createAdmin,
    loginAdmin,
    updateAdmin,
    getAdmin
}