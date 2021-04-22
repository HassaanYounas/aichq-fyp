const express = require('express');
const supervisorService = require('../db/db.supervisor.service');
const router = express.Router();

router.post('/login', loginSupervisor);
router.post('/add', addSupervisor);
router.post('/add/bulk', addSupervisorsBulk);
router.post('/set/active', setSupervisorActive);
router.post('/set/inactive', setSupervisorInactive);
router.post('/proposal/submit', submitSupervisorProposal);
router.post('/proposal/get/all', getSupervisorProposals);
router.post('/proposal/update', updateSupervisorProposal);
router.post('/request/submit', addSupervisionRequest);
router.post('/request/get', getSupervisionRequests);
router.post('/request/update', updateSupervisionRequest);
router.post('/get/all', getSupervisors);

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
                if (fewFailed) next('One or more insertions failed.');
                else res.json({});
            }
        }).catch(err => {
            fewFailed = true;
            if ((i === req.body.length - 1) && fewFailed) next('One or more insertions failed.');
        });
    }
}

function setSupervisorActive(req, res, next) {
    supervisorService.setSupervisorActive(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function setSupervisorInactive(req, res, next) {
    supervisorService.setSupervisorInactive(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function submitSupervisorProposal(req, res, next) {
    supervisorService.submitSupervisorProposal(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function updateSupervisorProposal(req, res, next) {
    supervisorService.updateSupervisorProposal(req.body).then(() => {
        res.json({});
    }).catch(err => next(err));
}

function getSupervisorProposals(req, res, next) {
    supervisorService.getSupervisorProposals(req.body).then((proposals) => {
        res.json(proposals);
    }).catch(err => next(err)); 
}

function addSupervisionRequest(req, res, next) {
    supervisorService.addSupervisionRequest(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getSupervisionRequests(req, res, next) {
    supervisorService.getSupervisionRequests(req.body).then((requests) => {
        res.json(requests);
    }).catch(err => next(err)); 
}

function updateSupervisionRequest(req, res, next) {
    supervisorService.updateSupervisionRequest(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getSupervisors(req, res, next) {
    supervisorService.getSupervisors(req.body).then((supervisors) => {
        res.json(supervisors);
    }).catch(err => next(err)); 
}

module.exports = router;