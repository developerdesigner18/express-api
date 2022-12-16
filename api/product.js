const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send(`${process.env.NODE_ENV}`);
});

module.exports = route;
