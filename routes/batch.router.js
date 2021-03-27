const express = require('express');
const batchService = require('../db/db.batch.service');
const router = express.Router();

router.post('/add', addBatch);
router.post('/set/maxgroups', setMaxGroups);
router.post('/get', getBatches);

function addBatch(req, res, next) {
    batchService.addBatch(req.body).then(() => {
        res.json({});
    }).catch(err => next(err));
}

function setMaxGroups(req, res, next) {
    batchService.setMaxGroups(req.body).then(() => {
        res.json({});
    }).catch(err => next(err));
}

function getBatches(req, res, next) {
    batchService.getBatches(req.body).then((batches) => {
        res.json(batches);
    }).catch(err => next(err)); 
}

module.exports = router;