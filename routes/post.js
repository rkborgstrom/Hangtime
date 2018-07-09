'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/post', (req, res) => {
  res.render('post', {title: 'Create An Account'}); //renders account ejs file
});

router.post('/post', (req, res, next) => {
  knex('post')
      .insert({
          username: req.body.username,
          email: req.body.email,
          full_name: req.body.weapon,
          password: req.body.age,
      }, '*')

      .then((post) => {
          res.send(post[0]);
      })
      .catch((err) => {
          next(err);
      });
});







module.exports = router;