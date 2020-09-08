const mongoose = require('mongoose');
const config = require('../helpers/config.json');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || config.connectionString, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
.catch(() => console.log("Error connecting to MongoDB"));

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

module.exports = mongoose;
