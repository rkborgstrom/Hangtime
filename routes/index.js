'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);

router.get('/', (req, res, next) => {
  knex('user_report')
  .returning('*')
  .then((user_report) => {
      res.render('index', {user_report});
  })
  .catch((err) => {
      next(err);
  });
});

module.exports = router;