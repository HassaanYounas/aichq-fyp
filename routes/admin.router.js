const express = require('express');
const adminService = require('../db/db.admin.service');
const router = express.Router();

router.post('/login', loginAdmin);
router.post('/update', updateAdmin);

function loginAdmin(req, res, next) {
    adminService.loginAdmin(req.body).then((admin) => {
        res.json(admin);
    }).catch(err => next(err)); 
}

function updateAdmin(req, res, next) {
    adminService.updateAdmin(req.body).then((admin) => {
        res.json(admin);
    }).catch(err => next(err));
}

module.exports = router;