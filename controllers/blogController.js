const Blog = require('../models/blog');

// Create a new blog post
exports.createBlog = async (req, res) => {
    const { title, content, tags } = req.body;
    try {
        const blog = new Blog({ title, content, tags, author: req.user._id });
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all blog posts
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'username');
        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a blog post
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a blog post
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await Blog.findByIdAndDelete(id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
