var express = require('express');
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
var passport = require('passport');

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./app/routes.js')(app, passport);
app.set('view engine', 'ejs');
app.listen(port,ip);
console.log('Server running on port: ' + port,ip);
module.exports = app;
