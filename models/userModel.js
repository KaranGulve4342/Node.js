const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        usernamme: {
            type: String,
            required: [true, "Please add the username"],
        },
        email: {
            type: String,
            required: [true, "Please add the user email address"],
            unique: [true, "Email address already taken"],
        },
        password: {
            type: String,
            required: [true, "Please add the user password"],
        },
    },
    {
        timeStamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);