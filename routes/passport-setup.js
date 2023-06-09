const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../model/user-model')
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;


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
    //  const userId = new ObjectId(req.params.id);
    // mongodb.getDb().db('Test').collection('headlines').find({ _id: userId }).toArray((err, result)
    try {
      // const user = new ObjectId(profile.id);
      // mongodb.getDb().db('Test').collection('profile').find({ _id: user })
      //  let user = await User.find({googleId: profile.id})
      //  let user = await User.create({googleId: profile.id})
      

    // if (user) {
    //   cb(null, user)
    // } else {
      let response = await mongodb.getDb().db('Test').collection('profile').insertOne(newUser);
      if (response.acknowledged) {
       console.log('created successfully');
      } 
      
      // else {
      //   res.status(500).json(response.error || 'Some error occurred while creating the contact.');
      // }
      //res.status(201).json(response) + 
      // cb(null, user)
    // }
    
    
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

