const mongoose = require('mongoose')

// Schema
const userShema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }
})