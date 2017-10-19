// server.js

// modules
var express = require('express');
var server = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 4200;

// mongoose connection

server.listen(port, function(){
  console.log('hello world');
})