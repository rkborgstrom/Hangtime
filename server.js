'use strict';

let fs = require('fs');
let path = require('path');
let bodyParser = require('body-parser');
let config = require('./knexfile.js')['development'];
let express = require('express');
let app = express();
let port = process.env.PORT || 8000;
let knex = require('knex')(config);
let morgan = require('morgan');
let index = require('./routes/index')
let account = require('./routes/account');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');
app.use(morgan('short'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.render('index');
})



// app.get('/', (req, res, next) => {
//         res.sendFile('./index');
//     })


app.use(index);
app.use(account);

app.use((_req, res) => {
    res.sendStatus(404);
  });

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;

