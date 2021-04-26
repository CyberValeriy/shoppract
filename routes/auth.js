const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.get('/',authController.getLogIn);

router.get('/signUp',authController.getSignUp);

router.post('/',authController.postLogIn);

router.post('/signUp',authController.postSignUp);

module.exports = router;