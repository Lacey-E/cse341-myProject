var express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect.js');
const dotenv = require('dotenv');
const connectDB = require('./db/connect')
const cookieSession = require('cookie-session');
const passport = require('passport');


var app = express();


app.set('view engine', 'ejs')


app.use(cookieSession({
    maxAge: 24*60*60,
    keys: [process.env.cookieKey]
}))

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