
module.exports = function(app, passport){
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'));


  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

}
