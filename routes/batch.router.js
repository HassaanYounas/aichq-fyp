const express = require('express');
const batchService = require('../db/db.batch.service');
const router = express.Router();

router.post('/add', addBatch);
router.post('/get', getBatches);

function addBatch(req, res, next) {
    batchService.addBatch(req.body).then(() => {
        res.json({});
    }).catch(err => next(err));
}

function getBatches(req, res, next) {
    batchService.getBatches(req.body).then((batches) => {
        res.json(batches);
    }).catch(err => next(err)); 
}

module.exports = router;