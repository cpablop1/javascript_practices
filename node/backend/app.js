'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Import files of routers
var project_routes = require('./routes/project');

// Middlewares for processing JSON
app.use(express.json());

// Middlewares for processing encoded urls
app.use(bodyParser.urlencoded({ extends: false }));

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routers
app.use('/api', project_routes);

// Exports
module.exports = app;