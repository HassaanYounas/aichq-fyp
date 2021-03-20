const express = require('express');
const helperService = require('../db/db.helpers.service');
const router = express.Router();

router.post('/everything', getEverything);
router.post('/clear', clearDB);

function getEverything(req, res, next) {
    helperService.getEverything().then(( 
        admin, 
        department, 
        batch, 
        group,
        pendingGroup,
        supervisor, 
        groupToken,
        student,
        supervisorProposal,
        groupProposal,
        project,
        supervisorRequest
    ) => {
        res.json( 
            admin, 
            department, 
            batch, 
            group,
            pendingGroup,
            supervisor, 
            groupToken,
            student,
            supervisorProposal,
            groupProposal,
            project,
            supervisorRequest
        );
    }).catch(err => next(err)); 
}

function clearDB(req, res, next) {
    helperService.clearDB().then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

module.exports = router;