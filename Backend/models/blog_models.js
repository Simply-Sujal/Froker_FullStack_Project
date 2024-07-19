const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    imageUrl: String,
    readingDuration: String,
    likes: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('Blog', BlogSchema);
