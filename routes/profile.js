const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');
const isAuth = require('../middleware/is-auth');

router.get('/user/:userId',isAuth,profileController.getUser);

router.post('/user/delete-order',isAuth,profileController.postDeleteOrder);

router.post('/logOut',isAuth,profileController.postLogOut);

module.exports = router;