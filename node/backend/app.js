'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Import files of routers
var project_routes = require('./routes/project');

// Middlewares for processing JSON
app.use(express.json());

// Middlewares for processing encoded urls
app.use(bodyParser.urlencoded({extends: false}));

// CORS

// Routers
app.use('/api', project_routes);

// Exports
module.exports = app;