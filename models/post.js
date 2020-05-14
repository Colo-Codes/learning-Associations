// Initialising modules
const mongoose = require('mongoose');

// Post model: title, content
//      Creating the schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// Creating the "return value" of our file
module.exports = mongoose.model('Post', postSchema);