const { Router } = require("express");
const db = require("../database");
const blogController = require("../controller/blog.controller");
const { image } = require("../middlewares/blog.middleware");
const router = new Router();

router.use((req, res, next) => {
    console.log("This is blog route");

    next();
});

// GET
router.get("/", blogController.getAllPosts);
router.get("/single", blogController.getSinglePosts);

// POST
router.post("/", image.single('image'), blogController.createPost);

module.exports = router;
