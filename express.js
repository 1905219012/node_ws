"use strict";
exports.__esModule = true;
//import expree module
var express = require("express");
var app = express();
//app object used to devloped the  rest services
//ex.get,post,put,delete................................................................
//get request
app.get("/", function (req, res) {
    res.status(200).json({ "message": "welcome to type script node js" });
});
//asign the port no
app.listen(8080, function () {
    console.log("server started sucess fully!!1");
});
