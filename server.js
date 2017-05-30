'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const UsersInfo = require('./model/users_info');

const app = express();
const router = express.Router();


const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/profile_dashboard';

mongoose.connect(MONGO_URL);

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

router.route('/users/:user_id')
 .put((req, res) => {
   UsersInfo.findById(req.params.user_id, (err, information) => {
     if (err) res.send(err);

     (req.body.user) ? information.user = req.body.user : null;
     (req.body.description) ? information.description = req.body.description : null;
     (req.body.imageUrl) ? information.imageurl = req.body.imageUrl : null;

     information.save((err) => {
       if (err) res.send(err);
       res.json(information);
     });
   });
 });

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`api running on port ${PORT}`);
});
