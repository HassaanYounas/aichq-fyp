const express = require('express');
const supervisorService = require('../db/db.supervisor.service');
const router = express.Router();

router.post('/add', addSupervisor);
router.post('/delete', deleteSupervisor);
router.post('/all', getSupervisors);

function addSupervisor(req, res, next) {
    supervisorService.addSupervisor(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function deleteSupervisor(req, res, next) {
    supervisorService.deleteSupervisor(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getSupervisors(req, res, next) {
    supervisorService.getSupervisors().then((supervisors) => {
        res.json(supervisors);
    }).catch(err => next(err)); 
}

module.exports = router;