const express = require('express');
const router = express.Router();




router.get('/user', userController);

module.exports = router