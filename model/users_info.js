'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsersInfoSchema = new Schema({
  user: String,
  description: String,
  imageurl: String,
  username: String
});

module.exports = mongoose.model('UsersInfo', UsersInfoSchema);
