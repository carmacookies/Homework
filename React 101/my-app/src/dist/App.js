"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
require("./styles/app.scss");
var react_2 = require("react");
var axios_1 = require("axios");
var quotes = [
    {
        index: 1,
        person: "Daniel Clowes",
        said: "he always accuses me of trying to look'cool', I was like, 'everybody tries to look cool, I just happen to be successful"
    },
    {
        index: 2,
        person: "Jess C. Scott",
        said: "I felt like an animal, and animals don’t know sin, do they?"
    }
];
//const ballon: string = 'data:image/jpeg;base64,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'
function App() {
    var _a = react_2.useState([]), catBreed = _a[0], setCatBreed = _a[1];
    function handleClick() {
        return __awaiter(this, void 0, void 0, function () {
            var data, arrayBreeds, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get('https://catfact.ninja/breeds')];
                    case 1:
                        data = (_a.sent()).data;
                        if (!data)
                            throw new Error('no data');
                        arrayBreeds = data.data;
                        console.log(arrayBreeds[8].breed);
                        if (!arrayBreeds)
                            throw new Error('no breed');
                        {
                            arrayBreeds.map(function (cat) { return react_1["default"].createElement("p", null, cat.breed); });
                        }
                        console.log(arrayBreeds);
                        setCatBreed(arrayBreeds);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("button", { onClick: handleClick }, "Click Me!")));
}
exports["default"] = App;
// quotes.map((quote) => {
//   return <Card title={quote.person} imgUrl='' />
// })