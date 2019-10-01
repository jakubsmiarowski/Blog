const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts

router.route('/posts').get(PostController.getPosts);
router.route('/posts').post(PostController.addPost);
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);
router.route('/posts/:id').get(PostController.getPost);

module.exports = router;