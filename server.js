var express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect.js');
const dotenv = require('dotenv');
const connectDB = require('./db/connect')
const passport = require('passport');
const axios = require('axios');
const session = require('express-session');

var app = express();
app.use(session({
    secret: process.env.GITHUB_CLIENT_SECRET,
    resave:false,
    saveUninitialized:true
}))

app.set('view engine', 'ejs')

app.get('/login', (req, res) => {
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&prompt=consent`);
})

app.get('/github/callback', (req, res) => {
    const {code}= req.query
    const body = {client_id: process.env.GITHUB_CLIENT_ID, client_secret: process.env.GITHUB_CLIENT_SECRET, code}
    const opts = {headers: {accept: 'application/json'}}
    axios.post("https://github.com/login/oauth/access_token", body, opts)

    .then((_res) => {

      req.session.token = _res.data.access_token;

      console.log("My token:", req.session.token);


      // Redirect to the desired route after successful authentication

      res.redirect(`/api-docs`);

    })

    .catch(err => res.status(500).json({ message: err.message }));

});


app.get('/logout', (req, res) => {
    req.session.token = null
    res.redirect('/api-docs');
    
})



// intialize passport
app.use(passport.initialize());
app.use(passport.session())


// app.get('/', (req,res)=> {
//     res.render('home');})


// connectDB()



const port = process.env.PORT || 3000

app.use(bodyParser.json()).use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
}).use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else{
        app.listen(port, () => {console.log('server is listening on port 3000!')});

    }
});