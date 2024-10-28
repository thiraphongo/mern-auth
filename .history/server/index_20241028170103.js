const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();


// Connect to clound database
mongoose.connect(process.env.DATABASE)
    .then(() => console.log("Connect Database Successfully"))
    .catch((err) => console.log("error" + err))

// Start the server
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Start Server inport ${port}`);
})

// import router
const userRoutes = require('./routes/UserRoute')

app.get('/api/user',userRoutes);