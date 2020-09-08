const express = require('express');
const patientService = require('../db/db.patient.service');
const router = express.Router();

router.post('/register', registerPatient);
router.post('/authenticate', authenticatePatient);
router.post('/update', updatePatient);
router.post('/update/credentials', updatePatientCredentials);
router.post('/get', getPatientByID);

function registerPatient(req, res, next) {
    patientService.registerPatient(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function authenticatePatient(req, res, next) {
    patientService.authenticatePatient(req.body).then((patient) => {
        res.json(patient);
    }).catch(err => next(err)); 
}

function updatePatient(req, res, next) {
    patientService.updatePatient(req.body).then((patient) => {
        res.json(patient);
    }).catch(err => next(err)); 
}

function updatePatientCredentials(req, res, next) {
    patientService.updatePatientCredentials(req.body).then((patient) => {
        res.json(patient);
    }).catch(err => next(err)); 
}

function getPatientByID(req, res, next) {
    patientService.getPatientByID(req.body).then((patient) => {
        res.json(patient);
    }).catch(err => next(err)); 
}

module.exports = router;
