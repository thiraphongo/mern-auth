const express = require('express');
const router = express.Router();

router.get('/user',(req,res)=>{
    res.json({
        massage:"API is Working!",
    });
});

module.exports = router