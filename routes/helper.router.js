const express = require('express');
const helperService = require('../db/db.helpers.service');
const router = express.Router();

router.post('/everything', getEverything);
router.post('/clear', clearDB);

function getEverything(req, res, next) {
    helperService.getEverything().then(results => {
        res.json(results);
    }).catch(err => next(err)); 
}

function clearDB(req, res, next) {
    helperService.clearDB().then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

module.exports = router;