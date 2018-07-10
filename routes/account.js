'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/account', (req, res) => {
  res.render('account', {title: 'Create An Account'}); //renders account ejs file
});

router.post('/account', (req, res, next) => {
  knex('user_info')
  .insert({
      username: req.body.username,
      email: req.body.email,
      full_name: req.body.fullname,
      password: req.body.password
  }, '*')

  .then((accounts) => {
      res.render('index');
  })

  .catch((err) => {
      next(err);
  });
});

module.exports = router;