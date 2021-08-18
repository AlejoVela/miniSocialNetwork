const PostController = require('../controllers/post');
const router = require('express').Router();

router.post("/createPost", PostController.createPost );//validar si el usuario esta logeado
router.get("/listPost/:hashtag?", PostController.listPost );//validar si el usuario esta logeado

module.exports = router;