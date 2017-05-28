'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const UsersInfo = require('./model/users_info');

const app = express();
const router = express.Router();
// let db;

const PORT = process.env.API_PORT || 3001;

mongoose.connect('mongodb://localhost:27017/profile_dashboard');
// -----------

// var MongoClient = require('mongodb').MongoClient,
//   co = require('co'),
//   assert = require('assert');
//
// co(function*() {
//   // Connection URL
//   var url = 'mongodb://localhost:27017/profile_dashboard';
//   // Use connect method to connect to the Server
//   var db = yield MongoClient.connect(url);
//   // Close the connection
//   db.close();
// }).catch(function(err) {
//   console.log(err.stack);
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', (req, res) => {
  res.json({ message: 'API Initialized!' });
});

router.route('/users')
  .get((req, res) => {
    UsersInfo.find((err, information) => {
      if (err) {
        res.send(err);
      }
      res.json(information);
    });
  })
  .post((req, res) => {
    const information = new UsersInfo();
    information.user = req.body.user;
    information.description = req.body.description;
    information.imageurl = req.body.imageUrl;
    information.username = req.body.userName;

    information.save((err) => {
      if (err) res.send(err);
      res.json({ message: 'User information successfully added!' });
    });
  });

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`api running on port ${PORT}`);
});
