const express = require('express');
const batchService = require('../db/db.batch.service');
const router = express.Router();

router.post('/create', createBatch);
router.post('/promote', promoteBatch);
router.post('/delete', deleteBatch);
router.post('/all', getBatches);
router.post('/add/supervisor', addSupervisorToBatch);

function createBatch(req, res, next) {
    batchService.createBatch(req.body).then(batch => {
        res.json(batch);
    }).catch(err => next(err)); 
}

function promoteBatch(req, res, next) {
    batchService.promoteBatch(req.body).then(batch => {
        res.json(batch);
    }).catch(err => next(err)); 
}

function deleteBatch(req, res, next) {
    batchService.deleteBatch(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function getBatches(req, res, next) {
    batchService.getBatches().then((batches) => {
        res.json(batches);
    }).catch(err => next(err)); 
}

function addSupervisorToBatch(req, res, next) {
    batchService.addSupervisorToBatch(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

module.exports = router;