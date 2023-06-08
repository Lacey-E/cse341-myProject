const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/user-model')


passport.use(
  new GoogleStrategy(
    {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, cb) => {
    
    const newUser = { 
            googleId: profile.id,
            displayName: profile.displayName,
            gender: profile.gender
    }

    try {
      let user = await User.findOne({googleId: profile.id})
    
    if (user) {
      cb(null, user)
    } else {
      user = await mongodb.getDb().db('Test').collection('profile').insertOne(newUser)
   

      cb(null, user)
    }
    
    
    } catch (err) {
      console.error(err)
    }

  }
));







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

