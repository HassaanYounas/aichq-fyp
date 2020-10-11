const express = require('express');
const groupService = require('../db/db.group.service');
const router = express.Router();

router.post('/reg', registerGroup);
router.get('/verify/:RollNumber/:Program/:Year/:Token/:Student', verifyGroup);

function registerGroup(req, res, next) {
    groupService.registerGroup(req.body, req).then(({}) => {
        res.json({});
    }).catch(err => next(err)); 
}

function verifyGroup(req, res, next) {
    groupService.verifyGroup(req.params).then(() => {
        res.json({ 'message': 'Verification successful.' });
    }).catch(err => next(err)); 
}

module.exports = router;