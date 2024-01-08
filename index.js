const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4100;

require('dotenv').config();

const ejsexpresslayout = require('express-ejs-layouts');
// const sassMiddleware = require('node-sass-middleware');

app.use(express.urlencoded());
const mongoose = require('./config/mongoose');

// node-sass-middleware configuration
app.set('view engine', 'ejs');
app.set('views', './views');


// Serve static files from the 'assets' directory
app.use(express.static(__dirname + '/assets'));

app.use(ejsexpresslayout);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

const router = require('./routes/index');
const { configDotenv } = require('dotenv');
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running: ', err);
  }
  console.log('Server is running on port', port);
});