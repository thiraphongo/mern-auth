// import Database
const User = require('../models/UserModel')

exports.signup = (req, res) => {
    const { name, enail, password } = req.body;
    const newUser = new User
};