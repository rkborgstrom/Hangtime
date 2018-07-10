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

module.exports = router;