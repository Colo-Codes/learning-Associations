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