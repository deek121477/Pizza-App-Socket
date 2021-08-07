"use strict";

var express = require('express');

var app = express();

var ejs = require('ejs');

var path = require('path');

var expressLayout = require('express-ejs-layouts');

var PORT = process.env.PORT || 3000; //Assets

app.use(express["static"]('public'));
app.get('/', function (req, res) {
  res.render('home');
}); //set template engine

app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');
app.listen(3000, function () {
  console.log("Listening on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
