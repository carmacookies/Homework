var express = require("express");
var mongoose = require('mongoose');
var PORT = process.env.PORT || 2000;
var app = express();
app.use(express.static('public'));
app.use(express.json());
var mongodb_uri = 'mongodb+srv://CarmaCookies:urTN9UeMHVj0dxMP@cluster0.3ahhotl.mongodb.net/?retryWrites=true&w=majority';
mongoose
    .connect(mongodb_uri)
    .then(function (res) {
    console.log('Connected to DB');
})["catch"](function (err) {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
app.listen(PORT, function () {
    console.log("server listening on 2000");
});
