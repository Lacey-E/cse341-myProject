const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/user-model')
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const mongoose = require('mongoose');

passport.use(
  new GoogleStrategy(
    {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    
    const newUser = { 
            googleId: profile.id,
            displayName: profile.displayName,
            gender: profile.gender
    }
    try {

      let user = await User.findOne({ googleId: profile.id})
      if (user) {
        done(null, user)
      }else {
        user = await User.create(newUser)
        done(null, user)
      }
    } catch (err) {
      console.error(err)
    }

  }
));

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user ) => done(err, user))
})





//     try {
//       let user = await User.findOne({ email:
//     }
    
    
//     , function (err, user) {
//       return cb(err, user);
//     });


// // new User ({
//   username: profile.displayName,
//   googleId: profile.id,
//   gender: profile.gender

// }).save()



// const GoogleStrategy = require('passport-google-oauth20');


// // passport.use(
    
// // new GoogleStrategy({

// // })

// // )

