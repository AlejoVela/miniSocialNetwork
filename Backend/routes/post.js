const PostController = require('../controllers/post');
const router = require('express').Router();
const Auth = require('../middlewares/auth');
const validateUser = require('../middlewares/validateUser');

router.post("/createPost", Auth, validateUser, PostController.createPost );//validar si el usuario esta logeado
router.get("/listPost/:hashtag?", Auth, validateUser,PostController.listPost );//validar si el usuario esta logeado

module.exports = router;