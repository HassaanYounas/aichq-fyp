const express = require('express');
const superAdminService = require('../db/db.super.admin.service');
const router = express.Router();

router.post('/create', createSuperAdmin);
router.post('/login', loginSuperAdmin);
router.post('/update', updateSuperAdmin);

function createSuperAdmin(req, res, next) {
    superAdminService.createSuperAdmin(req.body).then(() => {
        res.json({});
    }).catch(err => next(err)); 
}

function loginSuperAdmin(req, res, next) {
    superAdminService.loginSuperAdmin(req.body).then((superAdmin) => {
        res.json(superAdmin);
    }).catch(err => next(err)); 
}

function updateSuperAdmin(req, res, next) {
    superAdminService.updateSuperAdmin(req.body).then((superAdmin) => {
        res.json(superAdmin);
    }).catch(err => next(err));
}

module.exports = router;