"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserSchema = new mongoose_1["default"].Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
var UserModel = mongoose_1["default"].model("users", UserSchema);
exports["default"] = UserModel;
exports.UserValidation = joi_1["default"].object({
    email: joi_1["default"]
        .string()
        .email()
        .required(),
    password: joi_1["default"]
        .string()
        .required()
});
