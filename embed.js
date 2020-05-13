// Initialising modules
const mongoose = require('mongoose');

// Mongoose
mongoose.connect('mongodb://localhost/blog-demo');

// User model: email, name
//      Creating the schema
const userSchema = new mongoose.Schema({
    email: String,
    name: String
});
//      Creating the model
const User = mongoose.model('User', userSchema);

// Post model: title, content
//      Creating the schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});
//      Creating the model
const Post = mongoose.model('Post', postSchema);

// // Creating a user
// const newUser = new User({
//     email: 'something@else.com',
//     name: 'Some User Name'
// });
// newUser.save((err, user) => {
//     if(err) {
//         console.log('ERROR: ' + err);
//     } else {
//         console.log('User: ' + user);
//     }
// });

// // Creating a post
// const newPost = new Post({
//     title: 'This is a great post',
//     content: 'Awesome post content.'
// });
// newPost.save((err, post) => {
//     if(err) {
//         console.log('ERROR: ' + err);
//     } else {
//         console.log('User: ' + post);
//     }
// });