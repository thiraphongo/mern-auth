const express = require('express');
const router = express.Router();


// import Controller
const { test } = require('../controllers/UserController')

router.get('/', test);

module.exports = router