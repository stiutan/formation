var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entity = require('../models/Entity.js');

/* GET ALL EntityS */
router.get('/', function(req, res, next) {
  Entity.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE ENTITY BY ID */
router.get('/:id', function(req, res, next) {
  Entity.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE ENTITY */
router.post('/', function(req, res, next) {
  Entity.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE ENTITY */
router.put('/:id', function(req, res, next) {
  Entity.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Entity */
router.delete('/:id', function(req, res, next) {
  Entity.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
