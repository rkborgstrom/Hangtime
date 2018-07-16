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
    knex('user_report')
    .insert({
        //left side is database columns, right side is 'names' in ejs file 
        picture_url: req.body.picture,
        location: req.body.location,
        username: req.body.username,
        textbox: req.body.textbox,
        snow_report: req.body.snowreport,
        conditions: req.body.conditions,
        date: req.body.date,
        time: req.body.time,
      
    }, '*')
  
    .then((user_report) => {
        res.render('index', {user_report});
    })
  
    .catch((err) => {
        next(err);
    });
  });

  
  router.delete('/post/:id', (req, res, next) => {
    let reports;
  
    knex('user_report')
      .where('id', req.params.id)

      .first()
      .then((row) => {
        if (!row) {
          return next();
        }
        reports = row;
        return knex('user_report')
          .del()
          .where('id', req.params.id);
      })
      .then(() => {
        delete user_report.id;
        res.send(post);
      })
      .catch((err) => {
        next(err);
      });
  });






module.exports = router;