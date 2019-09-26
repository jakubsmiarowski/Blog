const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts

router.route('/posts').get(PostController.getPosts);

// add posts
router.route('/posts').post(PostController.addPost);

// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostByRange);

module.exports = router;