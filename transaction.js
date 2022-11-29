"use strict";
exports.__esModule = true;
//create the sub module
var express = require("express");
var transaction = express.Router();
transaction.get('/', function (req, res) {
    res.status(200).json({ 'message': 'transaction soon.....' });
});
transaction.get('/perry', function (req, res) {
    res.status(200).json({ 'message': 'welcome to my world' });
});
exports["default"] = transaction;
