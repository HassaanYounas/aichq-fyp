const express = require('express');
const cors = require('cors');

const jwt = require('./helpers/jwt');
const adminRouter = require('./routes/admin.router');
const superAdminRouter = require('./routes/super.admin.router');
const departmentRouter = require('./routes/department.router');
const batchRouter = require('./routes/batch.router');
const supervisorRouter = require('./routes/supervisor.router');
const studentRouter = require('./routes/student.router');
const groupRouter = require('./routes/group.router');
const helperRouter = require('./routes/helper.router');
const errorHandler = require('./helpers/error-handler');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/client/');
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.`);
});