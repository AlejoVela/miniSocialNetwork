const UserController = require('../controllers/user');
const router = require('express').Router();

router.post('/registerUser', UserController.registerUser );
router.get('/listUser/:name?', UserController.listUser ); //require middleware para validar login 

module.exports = router;