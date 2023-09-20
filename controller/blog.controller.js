// controllers/blog.controller.js

const blogModel = require("../models/blog.model"); // Import your model

module.exports = {
    getAllPosts: async (req, res) => {
        const posts = await blogModel.getAllPosts();
        // Implement logic to render a view or send a JSON response
        res.status(200).send(posts);
    },
    getSinglePosts: async (req, res) => {
        const posts = await blogModel.getAllPosts();



        res.status(200).send(posts[0]);
    },
    createPost: async (req, res) => {
        const imageUrl = req.file.path.replace(/\\/g, '/');
        const postData = {
            ...req.body,
            date: new Date(Date.now()),
            image_path: imageUrl,
        };
        
        console.log(
            "🚀 ~ file: blog.controller.js:13 ~ createPost: ~ postData:",
            postData
        );
        const blogPost = await blogModel.createPost(postData);
        // Implement logic to redirect or send a response
        res.status(200).send(blogPost);
    },
    // Implement other controller functions as needed
};
