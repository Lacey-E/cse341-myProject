const express = require("express");
const Router = express.Router();
const authController = require("../controllers/authRouter");

//login view
Router.get('/login', (req,res) =>{
    res.render('login')
})



Router.get('/logout', authController.logout);

// Authentication with Google
Router.get('/google', authController.googleAuth)


module.exports =Router;