const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require('./helpers/jwt');
const adminRouter = require('./routes/admin.router');
const batchRouter = require('./routes/batch.router');
const supervisorRouter = require('./routes/supervisor.router');
const helperRouter = require('./routes/helper.router');
const errorHandler = require('./helpers/error-handler');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/client/'));
//app.use(jwt());
app.use('/api', helperRouter);
app.use('/api/admin', adminRouter);
app.use('/api/batch', batchRouter);
app.use('/api/supervisor', supervisorRouter);
app.use(errorHandler);

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/client/');
});

app.get('*', (req,res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});

// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'aichq.fyp@gmail.com',
//     pass: 'HTAichQ@123'
//   }
// });

// const mailOptions = {
//   from: 'aichq.fyp@gmail.com',
//   to: '170273@students.au.edu.pk, 170349@students.au.edu.pk',
//   subject: 'Test Email',
//   text: 'Aur Sunao?'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
// 	console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });