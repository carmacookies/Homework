"use strict";
exports.__esModule = true;
var express = require('express');
var jokesCont_1 = require("../controllers/jokesCont");
var router = express.Router();
router
    .post('/jokeone', jokesCont_1.getJokeOne)
    .get('/joketwo', jokesCont_1.getJokeTwo)
    .get('/jokethree', jokesCont_1.getJokeThree);
exports["default"] = router;
