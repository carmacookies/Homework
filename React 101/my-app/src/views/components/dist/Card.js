"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Card = function (_a) {
    var name = _a.name, quote = _a.quote, imgUrl = _a.imgUrl;
    return (react_1["default"].createElement("div", { className: "card" },
        react_1["default"].createElement("h2", null, name),
        react_1["default"].createElement("h3", null, quote),
        react_1["default"].createElement("img", { src: imgUrl, alt: "" })));
};
exports["default"] = Card;
