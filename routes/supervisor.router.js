const express = require('express');
const supervisorService = require('../db/db.supervisor.service');
const router = express.Router();

// router.post('/login', loginSupervisor);
router.post('/add', addSupervisor);
router.post('/add/bulk', addSupervisorsBulk);
// router.post('/delete', deleteSupervisor);
router.post('/get/all', getSupervisors);

// function loginSupervisor(req, res, next) {
//     supervisorService.loginSupervisor(req.body).then((supervisor) => {
//         res.json(supervisor);
//     }).catch(err => next(err)); 
// }

function addSupervisor(req, res, next) {
    supervisorService.addSupervisor(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function addSupervisorsBulk(req, res, next) {
    supervisorService.addSupervisorsBulk(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getSupervisors(req, res, next) {
    supervisorService.getSupervisors().then((supervisors) => {
        res.json(supervisors);
    }).catch(err => next(err)); 
}

module.exports = router;