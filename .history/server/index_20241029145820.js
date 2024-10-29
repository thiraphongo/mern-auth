const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();



// import router
const userRoute = require('./routes/UserRoute')
const authRoute = require('./routes/AuthRoute')

// middleware 
app.use(express.json());

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})

// Connect to clound database
mongoose.connect(process.env.DATABASE)
    .then(() => console.log("Connect Database Successfully"))
    .catch((err) => console.log("error" + err))

// Start the server
const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Start Server inport ${port}`);
})


// use Route
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

