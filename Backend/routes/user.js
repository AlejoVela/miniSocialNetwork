const UserController = require('../controllers/user');
const router = require('express').Router();
const Auth = require('../middlewares/auth');
const validateUser = require('../middlewares/validateUser');

router.post('/registerUser', UserController.registerUser );
router.get('/listUser/:name?', Auth, validateUser, UserController.listUser );

module.exports = router;