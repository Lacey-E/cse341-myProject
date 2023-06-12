const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId
let userLoggedIn = false;

module.exports.logout = (req, res) => {
    
    res.send('logging Out')
}

module.exports.authCheck = (req, res, next) => {
    if(!userLoggedIn) {
        console.log(userLoggedIn)
            res.redirect('/api-docs')
        
        } else {
            next()
        }
}

module.exports.setProfile = (req, res) => {
  userLoggedIn = true
    
    console.log(userLoggedIn)
    if (userLoggedIn == true) {
        res.redirect('/api-docs')
    } else{
        userLoggedIn = false
    }

   

}


// const addUser = async (req, res) => {
//     const profile = {
//         username: req.body.username,
//     googleId: req.body.googleId,
//     gender: req.body.gender
//     };
//     const response = await mongodb.getDb().db('Test').collection('profile').insertOne(profile);
//     if (response.acknowledged) {
//       res.status(201).json(response) + 'created successfully';
//     } else {
//       res.status(500).json(response.error || 'Some error occurred while creating the contact.');
//     }
//   };





// module.exports = addUser;