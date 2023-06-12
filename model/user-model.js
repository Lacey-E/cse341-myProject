const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Schema = mongoose.Schema;




const userSchema = new Schema({
  
    googleId: String,
    displayname: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;