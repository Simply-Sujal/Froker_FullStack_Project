const Blog = require("../models/Blog");


// getting all the blogs 
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

// creating a new blog 
const createBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

// like a blog 
const likeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.likes += 1;
        await blog.save();
        res.json(blog);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

// disliking the blog or revert back the like 
const disLikeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.likes = Math.max(0, blog.likes - 1);
        await blog.save();
        res.json(blog);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}


module.exports = getAllBlogs, createBlog, likeBlog, disLikeBlog