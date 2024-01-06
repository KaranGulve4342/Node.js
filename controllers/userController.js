
const asyncHandler = require("express-async-handler");


// desc Register a user
// @route PORT /api/users/register
// acccess public

const registerUser = asyncHandler(async (req, res) => {
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