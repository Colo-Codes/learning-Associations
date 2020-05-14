// Initialising modules
const mongoose = require('mongoose');

// User model: email, name
//      Creating the schema
const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

// Creating the "return value" of our file
module.exports = mongoose.model('User', userSchema);