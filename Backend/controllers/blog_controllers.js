const Blog = require("../models/blog_models");

// Getting all the blogs 
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Creating a new blog 
const createBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Like a blog 
const likeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            blog.likes += 1;
            await blog.save();
            res.status(200).json(blog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Disliking the blog or revert back the like 
const disLikeBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (blog) {
            blog.likes = Math.max(0, blog.likes - 1);
            await blog.save();
            res.status(200).json(blog);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        console.log("Something went wrong", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getAllBlogs, createBlog, likeBlog, disLikeBlog };
