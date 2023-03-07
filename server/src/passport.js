const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new GitHubStrategy({
    clientID: '6c50f2b898303607d56a',
    clientSecret: '5a42eda7f4d970a27cbb42c5c8fb0e09f1771293',
    callbackURL: 'http://localhost:8080/main'
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));