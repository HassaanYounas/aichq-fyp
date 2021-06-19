const express = require('express');
const mongoose = require('mongoose');
const Announcement = require('../models/announcement.model');
const config = require('../helpers/config.json');

const announcementRouter = express.Router();

module.exports = (upload) => {
    const url = config.connectionString;
    const connect = mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });
    let gfs;
    connect.once('open', () => {
        gfs = new mongoose.mongo.GridFSBucket(connect.db, {
            bucketName: 'uploads'
        });
    });
   
    announcementRouter.route('/add').post(upload.single('File'), (req, res, next) => {
        console.log(req.body);
        const announcement = new Announcement({ 
            Department: req.body.Department,
            Program: req.body.Program,
            Batch: req.body.Batch,
            Title: req.body.Title,
            Body: req.body.Body,
            Filename: req.body.Filename,
        });
        announcement.save().then(() => res.status(200).json({})).catch(err => res.status(500).json(err));
    });

    return announcementRouter;
};