const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

require('dotenv').config();

const ejsexpresslayout = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');

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





/*
go to package-json and paste
   "engines": {
    "node": ">=18.18.0"
  },
1. git add . 
2. git commit -m "your commit"
3. git push
here you need to fill up some info about your project name , Build Command = npm install , Start Command = node index.js , 
dont't change other only change that i tell you ,

now you have option to Environment Variables Name_of_variable = DB and value = ".env in DB value put here"
and Click to create Web Series.

now have some issue like node version related so you go to Environment and go  Environment Variables Key =NODE_VERSION 
and value =18.18.0 and click to save and go to Event and click to Deploy



*/ 