const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.json({
        massage:"API is Working!",
    });
});

module.exports = router;