// import Database
const User = require('../models/UserModel')

exports.signup = async (req, res) => {
    const { name, enail, password } = req.body;
    const newUser = new User({name, enail, password});
    await newUser.save();
    res.status(201).json({massage:"User created successfully"});
};