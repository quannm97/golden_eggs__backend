const db = require("../database");
module.exports = {
    createPost: async function (inputValues) {
        // Check if the image_path already exists in the blog table
        try {
            const {author, title, image_path, content, date} = inputValues
            const sql =
                "INSERT INTO blog (author, title, image_path, content, date) VALUES (?, ?, ?, ?, ?)";
            const values = [author, title, image_path, content, date];
            const result = await db.promise().query(sql, values);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getAllPosts: async function () {
        try {
            const sql = "select * from blog";
            const result = await db.promise().query(sql);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
};
