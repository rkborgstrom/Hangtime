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

// let contracts = require('./routes/contracts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');
app.use(morgan('short'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.sendFile('index.html');
})

// app.use(assassins);
// app.use(contracts);

app.use((_req, res) => {
    res.sendStatus(404);
  });

app.use((err, _req, res, _next) => {
    if (err.status) {app.use(assassins);
                                
      return res
        .status(err.status)
        .set('Content-Type', 'text/plain')
        .send(err.message);
    }
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;

