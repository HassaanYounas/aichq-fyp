const express = require('express');
const groupService = require('../db/db.group.service');
const router = express.Router();

router.post('/reg', registerGroup);
router.get('/verify/:RollNumber/:Token/:Student/:GroupID', verifyGroup);
router.post('/login', loginGroup);

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

module.exports = router;