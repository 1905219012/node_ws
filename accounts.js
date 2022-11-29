"use strict";
exports.__esModule = true;
var express = require("express");
var account = express.Router();
account.get('/', function (req, res) {
    res.status(200).json({ "message": "welcome to my world" });
});
account.post('/acc', function (req, res) {
    res.status(200).json({ "message": "welcome to my state" });
});
exports["default"] = account;
