const router = require('express').Router();
const userController = require('../controllers/user');
const {authenticateToken} = require('../utils/middleware');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/updateSodium', authenticateToken, userController.updateUserRecSodiumIntake);

module.exports = router;