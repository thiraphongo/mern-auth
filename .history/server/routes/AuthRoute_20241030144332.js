const express = require('express');
const router = express.Router();

// import Controller
const { signup,signin } = require('../controllers/AuthController')

router.post('/signup',signup);
router.post('/signin',signin);

module.exports = router