// server.js

// modules
var express = require('express');
var server = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var port = 4200 || process.env.PORT;

// mongoose connection
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || )
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

server.listen(port, function(){
  console.log('hello world');
})