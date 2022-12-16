const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
    res.send("Root product API");
});

module.exports = route;
