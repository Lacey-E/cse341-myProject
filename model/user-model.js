const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Schema = mongoose.Schema;

//connect to mongodb

// mongoose.connect(process.env.MONGODB_URI,()=>{
//     console.log('connected to mongod');} 
//     )



const userSchema = new Schema({
    username: String,
    googleId: String,
    gender: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;