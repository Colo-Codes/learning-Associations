// Initialising modules
const mongoose = require('mongoose');

// Mongoose
mongoose.connect('mongodb://localhost/blog-demo-2');

// Post model: title, content
//      Creating the schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
//      Creating the model
const Post = mongoose.model('Post', postSchema);

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
//      Creating the model
const User = mongoose.model('User', userSchema);

