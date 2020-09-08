const express = require('express');
const doctorService = require('../db/db.doctor.service');
const router = express.Router();

router.post('/register', registerDoctor);
router.post('/authenticate', authenticateDoctor);
router.post('/update', updateDoctor);
router.post('/update/credentials', updateDoctorCredentials);
router.post('/update/rating', addRating);
router.post('/get', getDoctorByID);
router.post('/get/all', getAllDoctors);

function registerDoctor(req, res, next) {
    doctorService.registerDoctor(req.body).then(() => {
        res.json({});
    }).catch(err => next(err));
}

function authenticateDoctor(req, res, next) {
    doctorService.authenticateDoctor(req.body).then((doctor) => {
        res.json(doctor);
    }).catch(err => next(err));
}

function updateDoctor(req, res, next) {
    doctorService.updateDoctor(req.body).then((doctor) => {
        res.json(doctor);
    }).catch(err => next(err));
}

function updateDoctorCredentials(req, res, next) {
    doctorService.updateDoctorCredentials(req.body).then((doctor) => {
        res.json(doctor);
    }).catch(err => next(err));
}

function addRating(req, res, next) {
    doctorService.addRating(req.body).then((doctor) => {
        res.json(doctor);
    }).catch(err => next(err));
}

function getDoctorByID(req, res, next) {
    doctorService.getDoctorByID(req.body).then((doctor) => {
        res.json(doctor);
    }).catch(err => next(err)); 
}

function getAllDoctors(req, res, next) {
    doctorService.getAllDoctors().then((doctors) => {
        res.json(doctors);
    }).catch(err => next(err)); 
}

module.exports = router;
