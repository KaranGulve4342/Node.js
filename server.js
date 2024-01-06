const express = require("express");
const errorhandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json()); // middleware

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorhandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});