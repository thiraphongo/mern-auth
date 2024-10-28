const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Start Server inport ${port}`);
})