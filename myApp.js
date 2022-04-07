var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();


console.log("Hello World");

/*
app.get("/json", function(req, res) {
    res.json(
        {"message": "Hello json"}
    );
});
*/

app.get("/json", function(req, res) {
    console.log(process.env.MESSAGE_STYLE, "<=message style");
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json(
            { "message": "HELLO JSON" }
        )
    } else {
        res.json(
            { "message": "Hello json" }
        )
    }
});

























 module.exports = app;
