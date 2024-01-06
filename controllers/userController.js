
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");


// desc Register a user
// @route PORT /api/users/register
// acccess public

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User Already registered");
    }

    // hash password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("hashed Password: ", hashedPassword);

    res.json({ message : "Register for user"});
});

// desc Login user
// @route PORT /api/users/login
// acccess public

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message : "Login user"});
});

// desc current user
// @route PORT /api/users/current
// acccess private

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message : "Current user Information"});
});

module.exports ={ registerUser, loginUser, currentUser};