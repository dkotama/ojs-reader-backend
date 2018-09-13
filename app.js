const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/covers', express.static(__dirname + '/public/images/covers/'));
app.use('/pdf', express.static(__dirname + '/public/pdf/'));

// APP_TOKEN = process.env.APP_TOKEN;

require('./routes')(app);


module.exports = app;