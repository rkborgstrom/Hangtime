'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/index', (req, res) => {
  res.render('index', {title: 'Home Page'}); //renders index ejs file
});

router.post('/index', (req, res, next) => {
  knex('index')
      .insert({
          username: req.body.username,
          email: req.body.email,
          full_name: req.body.weapon,
          password: req.body.age,
      }, '*')

      .then((index) => {
          res.send(index[0]);
      })
      .catch((err) => {
          next(err);
      });
});


module.exports = router;