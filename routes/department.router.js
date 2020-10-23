const express = require('express');
const departmentService = require('../db/db.department.service');
const router = express.Router();

router.post('/add', addDepartment);
router.post('/get/all', getDepartments);

function addDepartment(req, res, next) {
    departmentService.addDepartment(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getDepartments(req, res, next) {
    departmentService.getDepartments(req.body).then((departments) => {
        res.json(departments);
    }).catch(err => next(err)); 
}

module.exports = router;