// Initialising modules
const mongoose = require('mongoose');

// Mongoose
mongoose.connect('mongodb://localhost/blog-demo');

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
    posts: [postSchema]
});
//      Creating the model
const User = mongoose.model('User', userSchema);

// // Example of a user object model
// {
//     email: 'my@email.com',
//     name: 'John Doe',
//     posts: [
//         {title: 'Title 1', content: 'Content 1.'},
//         {title: 'Title 2', content: 'Content 2.'},
//         {title: 'Title 3', content: 'Content 3.'}
//     ]
// }

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

// // Creating a user
// const newUser = new User({
//     email: 'my@email.com',
//     name: 'John Doe'
// });
// // Adding posts to the user
// newUser.posts.push({
//         title: 'Post Title 1',
//         content: 'Post content 1.'
// });
// // Saving the user
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

// Finding a user
User.findOne({name: 'John Doe'}, (err, userFound) => {
    if(err) {
        console.log('ERROR: ' + err);
    } else {
        //console.log('User found: ' + userFound);
        // Adding a post to the user
        userFound.posts.push({
            title: 'Post Title 2',
            content: 'Post content 2.'
        });
        // Saving the user to the DB
        userFound.save((err, user) => {
            if(err) {
                console.log('ERROR: ' + err);
            } else {
                console.log('User: ' + user);
            }
        });
    }
});