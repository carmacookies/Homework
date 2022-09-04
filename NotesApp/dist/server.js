"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require ('express')
// const mongoose = require ('mongoose')
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const port = process.env.PORT || 4001;
require('dotenv').config();
const mongodb_uri = process.env.MONGODB_URI;
mongoose_1.default
    .connect(mongodb_uri)
    .then(() => {
    console.log('Connected to DB');
})
    .catch(() => {
    console.log('At mongoose.connect:');
    console.error(Error);
});
const userRoute_1 = __importDefault(require("./routes/userRoute"));
app.use('/users', userRoute_1.default);
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
