const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId

module.exports.logout = (req, res) => {
    res.send('logging Out')
}

module.exports.setProfile = (req, res) => {
    res.redirect('/api-docs')
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