const express = require('express');
const studentService = require('../db/db.student.service');
const batchService = require('../db/db.batch.service');
const router = express.Router();

router.post('/add', addStudent);
router.post('/add/bulk', addStudentsBulk);
router.post('/get/all', getStudents);
router.post('/get/batch', getStudentsOfBatch);

function addStudent(req, res, next) {
    studentService.addStudent(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function addStudentsBulk(req, res, next) {
    let fewFailed = false;
    for (let i = 0; i < req.body.length; i++) {
        studentService.addStudent(req.body[i]).then(() => {
            if (i === req.body.length - 1) {
                if (fewFailed) next('Few insertions failed or already exist.');
                else res.json({});
            }
        }).catch(err => {
            fewFailed = true;
            if ((i === req.body.length - 1) && fewFailed) next('Few insertions failed or already exist.');
        });
    }
}

function getStudents(req, res, next) {
    studentService.getStudents(req.body).then((students) => {
        res.json(students);
    }).catch(err => next(err)); 
}

function getStudentsOfBatch(req, res, next) {
    studentService.getStudentsOfBatch(req.body).then((students) => {
        res.json(students);
    }).catch(err => next(err)); 
}

module.exports = router;