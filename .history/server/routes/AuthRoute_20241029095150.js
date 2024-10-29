const express = require('express');
const router = express.Router();

// import Controller
const { signup } = require('../controllers/UserController')

router.post('signup',signup);

module.exports = router