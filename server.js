'use strict';
global.config = require("./src/config.json").server;
global.mongoose = require('mongoose');

const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
// database connection
mongoose.connect('mongodb://app:password@ds137267.mlab.com:37267/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/assets', express.static(config.assets));
app.use('/css', express.static(config.styles));
app.use('/scripts', express.static(config.scripts));
app.use('/maps', express.static(config.assets + 'maps'));


//app.set('models', require(config.models));
app.set('view engine', 'jade');
app.use(express.static(config.templates));

// dynamically include routes (Controller)
fs.readdirSync('./server/controllers').forEach(function(file) {
    if (file.substr(-3) == '.js') {
        var route = require('./server/controllers/' + file);
        route.controller(app);
    }
});

fs.readdirSync('./server/models').forEach(function(file) {
    if (file.substr(-3) == '.js') {
        var modelName = file.split('.')[0].charAt(0)
            .toUpperCase() + file.split('.')[0].slice(1) + 'Model';

        var modelFile = require('./server/models/' + file);
        app.set(modelName, modelFile);
    }
});

/* simple equivalent htaccess for angular */
app.all('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', {
        root: config.templates
    });
});

const server = require('http').createServer(app);
server.listen(config.port, config.ip);
