// import Database
const User = require('../models/UserModel')

exports.signup = async (req, res) => {
    const { username, enail, password } = req.body;
    const newUser = new User({username, enail, password});
    await newUser.save();
    res.status(201).json({message:"User created successfully"});
};