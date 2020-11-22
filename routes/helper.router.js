const express = require('express');
const helperService = require('../db/db.helpers.service');
const router = express.Router();

router.post('/everything', getEverything);
router.post('/clear', clearDB);
router.post('/remove/group', removeGroup);
router.post('/remove/supervisor', removeSupervisor);
router.post('/remove/student', removeStudent);

function getEverything(req, res, next) {
    helperService.getEverything().then((admin, batches, groups, supervisors) => {
        res.json(admin, batches, groups, supervisors);
    }).catch(err => next(err)); 
}

function clearDB(req, res, next) {
    helperService.clearDB().then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function removeGroup(req, res, next) {
    helperService.removeGroup().then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function removeSupervisor(req, res, next) {
    helperService.removeSupervisor().then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function removeStudent(req, res, next) {
    helperService.removeStudent().then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

module.exports = router;