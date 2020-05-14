// Initialising modules
const mongoose = require('mongoose');

// Mongoose
mongoose.connect('mongodb://localhost/blog-demo-2');

// Requiring post.js
const Post = require('./models/post');

// Requiring user.js
const User = require('./models/user');

// Creating a post
Post.create({
    title: 'This is another title (3)',
    content: 'And this is another blogpost content. (3)'
}, (err, post) => {
    if(err) {
        console.log('ERROR: ' + err);
    } else {
        //console.log('Post: ' + post);
        User.findOne({email: 'address@site.com'}, (err, foundUser) => {
            if(err) {
                console.log('ERROR: ' + err);
            } else {
                foundUser.posts.push(post);
                foundUser.save((err, data) => {
                    if(err) {
                        console.log('ERROR: ' + err);
                    } else {
                        console.log('Data: ' + data);
                    }
                });
            }
        });
    }
});

// // Creating a user
// User.create({
//     email: 'address@site.com',
//     name: 'Jane Doe'
// });

// // Find user and all posts for that user
// User.findOne({email: 'address@site.com'}).populate('posts').exec((err, foundUser) => {
//     if(err) {
//         console.log('ERROR: ' + err);
//     } else {
//         console.log('User: ' + foundUser);
//     }
// });
