'use strict'; 
/* eslint-env node */
/* eslint-disable no-use-before-define */

let router = require('express').Router();
let env = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[env];
let knex = require('knex')(config);
const bcrypt = require('bcryptjs')

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

  .then((info) => {
    res.render('profile', {info});
})

  .catch((err) => {
      next(err);
  });
});




module.exports = router;

// router.post('/account', (req, res, next) => {
//   knex('user_info')
//     .where('username', req.body.username)
//     .then(function (users) {
//       if (users.length > 0) {
//         let usernameExistsError = new Error('Username exists');
//         return Promise.reject(usernameExistsError);
//       } else {
//         return bcrypt.hash(req.body.password, saltRounds);
//       }
//     })
//     .then(function (hash) {
//       return knex('user_info')
//         .insert({
//           username: req.body.username,
//           email: req.body.email,
//           full_name: req.body.fullname,
//           password: req.body.hash
//         }, '*')
//     })