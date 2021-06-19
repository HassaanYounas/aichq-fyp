const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const crypto = require('crypto');
const path = require('path');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');

const jwt = require('./helpers/jwt');
const adminRouter = require('./routes/admin.router');
const superAdminRouter = require('./routes/super.admin.router');
const departmentRouter = require('./routes/department.router');
const batchRouter = require('./routes/batch.router');
const supervisorRouter = require('./routes/supervisor.router');
const studentRouter = require('./routes/student.router');
const groupRouter = require('./routes/group.router');
const announcementRouter = require('./routes/announcement.router');
const helperRouter = require('./routes/helper.router');
const errorHandler = require('./helpers/error-handler');
const config = require('./helpers/config.json');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.static(process.cwd() + '/client/'));
//app.use(jwt());
app.use('/api', helperRouter);
app.use('/api/admin', adminRouter);
app.use('/api/super/admin', superAdminRouter);
app.use('/api/department', departmentRouter);
app.use('/api/batch', batchRouter);
app.use('/api/supervisor', supervisorRouter);
app.use('/api/student', studentRouter);
app.use('/api/group', groupRouter);
app.use(errorHandler);

const storage = new GridFsStorage({
    url: config.connectionString,
    file: (req, file) => {
        console.log('das');
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) return reject(err);
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage });
app.use('/api/announcement', announcementRouter(upload));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/');
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.`);
});