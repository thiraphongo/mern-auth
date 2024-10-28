const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()

const app = express();

// middleware 
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

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
const userRoute = require('./routes/UserRoute')

app.get('/api/user',userRoute);