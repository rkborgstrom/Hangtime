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


var moment = require('moment');
exports.index = function(req, res) {
    res.render('index', { moment: moment });
}
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







module.exports = router;