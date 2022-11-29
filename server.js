"use strict";
exports.__esModule = true;
//merge two module account & transaction
var express = require("express");
var transaction_1 = require("./transaction");
var accounts_1 = require("./accounts");
var app = express();
app.use("/module1", transaction_1["default"]);
app.use("/module2", accounts_1["default"]);
app.listen(8080, function () {
    console.log("server started");
});
//http://localhost:8080/module1 for transaction
//http://localhost:8080/module1/perryfor /transaction get 
//http://localhost:8080/module2/  for getreuest account
//http://localhost:8080/module2/   get request  account
