// Get dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Set app config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);
app.use(function (err, req, res, next){
  console.error(err.stack);
  res.status(500).send('server error...');
});

module.exports = app;
