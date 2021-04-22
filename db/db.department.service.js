const { Department } = require('../models/index');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const mongoose = require('./mongoose');

function generatePassword(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    } return result;
}

function sendEmail(department) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io', port: 2525,
        auth: { user: 'a36d2a20fc0a61', pass: '6c9e693d3d4cc6' }
    });
    let mailOptions = {
        from: 'no.reply@aichq.com',
        to: department.Email,
        subject: 'AichQ | FYP Director | ' + department.Name,
        text: `Respected ${department.DirectorName},\n\nYou have been appointed as FYP Director for ${department.Name} department.\n\nYour login credentials for AichQ are:\nEmail: ${department.Email}\nPassword: ${department.Password}\n\nYou can access AichQ from here: aichq-fyp.herokuapp.com\n\nRegards, AichQ Team.`
    };
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) { reject(error); return; } 
            resolve(info);
        });
    });
}

async function addDepartment(params) {
    if (await Department.find({ 
        $or: [
            { 'Email': params.Email },
            { 'Name': params.Name }
        ]}
    )) throw 'Department or email already exists.';       
    const department = new Department({
        DirectorName: params.DirectorName,
        Email: params.Email,
        // Password: generatePassword(8),
        Password: '123456789',
        Name: params.Name    
    });
    for (let i = 0; i < 2; i++) {
        try { info = await sendEmail(department); break; } 
        catch (e) { error = e; }
    }
    department.Password = bcrypt.hashSync(department.Password, 10);
    return await department.save();
}

async function updateDepartment(params) {
    const department = await Department.find({ Email: params.OldEmail });
    if (department) {
        department.Name = params.Name;
        department.DirectorName = params.DirectorName;
        department.Email = params.NewEmail;
        department.Password = generatePassword(8);
        for (let i = 0; i < 2; i++) {
            try { info = await sendEmail(department); break; } 
            catch (e) { error = e; }
        }
        department.Password = bcrypt.hashSync(department.Password, 10);
        return await department.save();
    } throw 'Invalid email.';
}

async function addProgram(params) {
    const department = await Department.find({ Name: params.Name });
    if (department) {
        department.Programs.forEach(e => {
            if (e.Title == params.Title) throw 'Program already exists in department.';
        }); 
        department.Programs.push({
            Title: params.Title
        });
        return await department.save();
    } else throw 'Department not found.';
}

async function getPrograms(params) {
    const department = await Department.find({ Name: params.Name });
    if (department) {
        let programs = [];
        department.Programs.forEach(e => {
            programs.push({ Title: e.Title })
        });
        return programs;
    } else throw 'Department not found.';
}

async function getDepartments(params) {
    const departments = await Department.find();
    if (departments) {
        let results = [], i = 0;
        departments.forEach(e => {
            results.push({ 
                ID: e._id,
                Name: e.Name,
                DirectorName: e.DirectorName,
                Email: e.Email,
                Programs: new Array()
            });
            e.Programs.forEach(p => results[i].Programs.push({ Title: p.Title })); 
            i++;
        });
        return results;
    } else throw 'No departments found.';
}

module.exports = {
    addDepartment,
    addProgram,
    updateDepartment,
    getPrograms,
    getDepartments
}