const express = require('express');
const router = express.Router();


// import Controller
const userController = require('./controllers/UserController')

router.get('/user', userController);

module.exports = router