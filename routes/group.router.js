const express = require('express');
const groupService = require('../db/db.group.service');
const router = express.Router();

router.post('/reg', registerGroup);
router.get('/verify/:RollNumber/:Token/:Student/:GroupID', verifyGroup);
router.post('/login', loginGroup);
router.post('/get/all', getGroups);
router.post('/assign/supervisor', assignSupervisor);
router.post('/get', getGroup);

function loginGroup(req, res, next) {
    groupService.loginGroup(req.body).then((group) => {
        res.json(group);
    }).catch(err => next(err));
}

function registerGroup(req, res, next) {
    groupService.registerGroup(req.body, req).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function verifyGroup(req, res, next) {
    groupService.verifyGroup(req.params).then(() => {
        res.json({ 'message': 'Verification successful.' });
    }).catch(err => next(err)); 
}

function getGroups(req, res, next) {
    groupService.getGroups().then((groups) => {
        res.json(groups);
    }).catch(err => next(err)); 
}

function assignSupervisor(req, res, next) {
    groupService.assignSupervisor(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getGroup(req, res, next) {
    groupService.getGroup(req.body).then((group) => {
        res.json(group);
    }).catch(err => next(err)); 
}

module.exports = router;