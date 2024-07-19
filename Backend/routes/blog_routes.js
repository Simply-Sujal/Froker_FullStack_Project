const express = require('express');
const { getAllBlogs, createBlog, likeBlog, disLikeBlog } = require("../controllers/blog_controllers");
const router = express.Router();

// Getting all the blogs 
router.get('/getallblogs', getAllBlogs);

// Post route for creating a blog
router.post('/postblog', createBlog);

// Like a blog 
router.patch('/:id/like', likeBlog);

// Dislike blog or revert back the like button 
router.patch('/:id/unlike', disLikeBlog);

module.exports = router;
