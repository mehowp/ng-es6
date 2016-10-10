'use strict';
global.config = require("./src/config.json").server;

const express = require('express');
const app = express();

app.use('/assets', express.static(config.assets));
app.use('/css', express.static(config.styles));
app.use('/scripts', express.static(config.scripts));
app.use('/maps', express.static(config.assets + 'maps'));


//app.set('models', require(config.models));
app.set('view engine', 'jade');
app.use(express.static(config.templates));
app.use(require(config.controllers));

/* simple equivalent htaccess for angular */
app.all('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', {
        root: config.templates
    });
});

const server = require('http').createServer(app);
server.listen(config.port, config.ip);