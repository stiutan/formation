var mongoose = require('mongoose');

var EntitySchema = new mongoose.Schema({
  number: String,
  name: String,
  height: String,
  gender: String,
});

module.exports = mongoose.model('Entity', EntitySchema);
