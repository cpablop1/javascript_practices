'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3700;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/portafolio').then(()=>{
    console.log('Conexión a la base de datos satisfactoriamente.');

    // Run server
    app.listen(port, ()=>{
        console.log('Server running correctly on port: ' + port);
    });
}).catch(err => console.log(err));