const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res,next) => {
    res.json({
        status:"ok",
        message:"user Management API is running",
    });
});

module.exports = app;