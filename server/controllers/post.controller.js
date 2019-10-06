const Post = require('../models/post.model');
const uuid = require('uuid');


exports.getPosts = async(req, res) => {

    try {
        res.status(200).json(await Post.find());
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.getPost = async(req, res) => {
    try {
        const post = await Post.findOne({
            id: req.params.id
        });
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.addPost = async function(req, res) {

    try {
        const { title, author, content } = req.body;

        let newPost = new Post(req.body);
        newPost.id = uuid();

        postSaved = await newPost.save();
        res.status(200).json(postSaved);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.getPostsByRange = async function(req, res) {

    try {
        let { startAt, limit } = req.params;

        startAt = parseInt(startAt);
        limit = parseInt(limit);

        const posts = await Post.find().skip(startAt).limit(limit);
        const amount = await Post.countDocuments();

        res.status(200).json({
            posts,
            amount,
        });

    } catch (err) {
        res.status(500).json(err);
    }

};