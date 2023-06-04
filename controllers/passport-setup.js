const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// const GoogleStrategy = require('passport-google-oauth20');


// // passport.use(
    
// // new GoogleStrategy({

// // })

// // )