"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CatsSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});
var CatsModel = mongoose_1["default"].model('Cats', CatsSchema);
exports["default"] = CatsModel;
