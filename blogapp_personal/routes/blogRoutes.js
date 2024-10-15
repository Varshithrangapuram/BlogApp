const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

const router = express.Router();
//get all blogs
router.get("/all-blog", getAllBlogsController);

// CREATE blog || POST
router.post("/create-blog", createBlogController);

//LOGIN || POST
router.put("/update-blog/:id", updateBlogController);
//single blog details
router.get("/get-blog/:id", getBlogByIdController);
//delete blog
router.delete("/delete-blog/:id", deleteBlogController);

router.get("/user-blog/:id", userBlogController);


module.exports = router;