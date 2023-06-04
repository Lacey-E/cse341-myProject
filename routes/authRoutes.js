const express = require("express");
const Router = express.Router();
const passport = require('passport');
const authController = require("../controllers/authRouter");
require('./passport-setup.js')


//login view
Router.get('/login', (req,res) =>{
    res.render('login')
})



Router.get('/logout', authController.logout);

// Authentication with Google
Router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}))


module.exports =Router;