const express = require('express');
const studentService = require('../db/db.student.service');
const router = express.Router();

router.post('/add', addStudent);
router.post('/get/all', getStudents);

function addStudent(req, res, next) {
    studentService.addStudent(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getStudents(req, res, next) {
    studentService.getStudents().then((students) => {
        res.json(students);
    }).catch(err => next(err)); 
}

module.exports = router;