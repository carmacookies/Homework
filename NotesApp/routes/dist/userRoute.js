"use strict";
exports.__esModule = true;
var express_1 = require("express");
var userCont_1 = require("../controlers/userCont");
var router = express_1["default"].Router();
router
    .post("/register", userCont_1.handleRegister)
    .post("/login", userCont_1.handleLogin);
exports["default"] = router;
