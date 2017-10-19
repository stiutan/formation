// server.js

// modules
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// port
var port = 8000 || process.env.PORT;

// secrets
var secrets = require('./secrets.js');

// Required application specific custom router module
// var routes = require('./src/routes/');

// mongoose connection
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || secrets.MONGODB_URI)
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });

// configuration of libraries
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
app.route('/yes').get(function(req,res) {
  res.send("justin is a poo");
});

app.route('/').get(function(req,res) {
  console.log("yaaa");
  res.send("PIA STINKS");
});

// Spin up the server
app.listen(port, function() {
  console.log('running on port', port);
})