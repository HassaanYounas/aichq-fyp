const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const jwt = require('./helpers/jwt');
const helperRouter = require('./routes/helper.router');
const patientRouter = require('./routes/patient.router');
const doctorRouter = require('./routes/doctor.router');
const errorHandler = require('./helpers/error-handler');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/client/'));
//app.use(jwt());
app.use('/api', helperRouter);
app.use('/api/patient', patientRouter);
app.use('/api/doctor', doctorRouter);
app.use(errorHandler);

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/client/');
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});