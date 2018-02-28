var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./app/routes.js')(app, passport);
app.set('view engine', 'ejs');
app.listen(port);
console.log('Server running on port: ' + port);
