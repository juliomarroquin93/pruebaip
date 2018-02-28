
var configAuth = require('./auth');
var FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function(passport){
  passport.use(new FacebookStrategy({
      clientID: configAuth.facebookAuth.clientId,
      clientSecret: configAuth.facebookAuth.clientSecret,
      callbackURL: configAuth.facebookAuth.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOrCreate(..., function(err, user) {
        if (err) { return done(err); }
        done(null, user);
      });
    }
  ));

}
