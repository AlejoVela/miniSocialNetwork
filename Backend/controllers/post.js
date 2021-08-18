const Post = require('../models/post');

const createPost = async (req, res) => {
    if(!req.body.text || !req.body.hashtag)
        return res.status(401).send("Process Failed: There'r empty fields");
    
    let post = new Post({
        userId: req.user.pass, //req.user._id,
        text: req.body.text,
        hashtag: req.body.hashtag, //añadir array de hashtag
    });
    
    let result = await post.save();
    if(!result) return res.status(401).send("Process Failed: Failed to create post");
    return res.status(201).send({ result });
};

const listPost = async (req, res) => {
    let post = await Post.find({hashtag: new RegExp(req.params["hashtag"], "i")}).populate("userId").exec();

    if(!post || post.length === 0) return res.status(401).send("Process Failed: There'nt post");

    return res.status(401).send({ post });
};

module.exports = { listPost, createPost };
