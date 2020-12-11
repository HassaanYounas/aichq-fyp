const express = require('express');
const supervisorService = require('../db/db.supervisor.service');
const router = express.Router();

router.post('/login', loginSupervisor);
router.post('/add', addSupervisor);
router.post('/add/bulk', addSupervisorsBulk);
router.post('/proposal', submitSupervisorProposal);
router.post('/get/all', getSupervisors);
router.post('/get', getSupervisor);

function loginSupervisor(req, res, next) {
    supervisorService.loginSupervisor(req.body).then((supervisor) => {
        res.json(supervisor);
    }).catch(err => next(err)); 
}

function addSupervisor(req, res, next) {
    supervisorService.addSupervisor(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function addSupervisorsBulk(req, res, next) {
    let fewFailed = false;
    for (let i = 0; i < req.body.length; i++) {
        supervisorService.addSupervisor(req.body[i]).then(() => {
            if (i === req.body.length - 1) {
                if (fewFailed) next('Few insertions failed.');
                else res.json({});
            }
        }).catch(err => {
            fewFailed = true;
            if ((i === req.body.length - 1) && fewFailed) next('Few insertions failed.');
        });
    }
}

function submitSupervisorProposal(req, res, next) {
    supervisorService.submitSupervisorProposal(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getSupervisors(req, res, next) {
    supervisorService.getSupervisors().then((supervisors) => {
        res.json(supervisors);
    }).catch(err => next(err)); 
}

function getSupervisor(req, res, next) {
    supervisorService.getSupervisor(req.body).then((supervisor) => {
        res.json(supervisor);
    }).catch(err => next(err)); 
}

module.exports = router;