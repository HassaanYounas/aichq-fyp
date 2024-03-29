const express = require('express');
const departmentService = require('../db/db.department.service');
const router = express.Router();

router.post('/add', addDepartment);
router.post('/add/program', addProgram);
router.post('/update', updateDepartment);
router.post('/get/all', getDepartments);
router.post('/get/programs', getPrograms);

function addDepartment(req, res, next) {
    departmentService.addDepartment(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function addProgram(req, res, next) {
    departmentService.addProgram(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function updateDepartment(req, res, next) {
    departmentService.updateDepartment(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getPrograms(req, res, next) {
    departmentService.getPrograms(req.body).then((programs) => {
        res.json(programs);
    }).catch(err => next(err)); 
}

function getDepartments(req, res, next) {
    departmentService.getDepartments(req.body).then((departments) => {
        res.json(departments);
    }).catch(err => next(err)); 
}

module.exports = router;