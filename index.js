const express = require("express");
const app = express();
const product = require("./api/product");
require("dotenv").config();
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use("/api", product);

app.listen(8000, () => console.log("PORT 8000"));
