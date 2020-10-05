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
const PORT = process.env.PORT || 8888;

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

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});