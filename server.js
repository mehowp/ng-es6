'use strict';
global.config = require("./src/config.json").server;
let path = require('path');

const express = require('express');
const app = express();

app.use('/assets', express.static(config.assets));
app.use('/templates', express.static(config.templates));
app.use('/css', express.static(config.styles));
app.use('/scripts', express.static(config.scripts));
app.use('/maps', express.static(config.assets + 'maps'));

//app.set('models', require(config.models));
app.use(express.static(config.templates));
//app.use(require(__dirname+config.controllers));

/* simple equivalent htaccess for angular */
app.all('/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile(__dirname + '/build/templates/index.html');
});

const server = require('http').createServer(app);

server.on('listening',function(){
    console.log('ok, server is running');
});

server.listen(config.port, config.ip);