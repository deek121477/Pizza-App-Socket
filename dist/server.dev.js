"use strict";

require('dotenv').config();

var express = require('express');

var app = express();

var ejs = require('ejs');

var path = require('path');

var expressLayout = require('express-ejs-layouts');

var PORT = process.env.PORT || 3000;

var mongoose = require('mongoose');

var session = require('express-session');

var flash = require('express-flash');

var MongoDbStore = require('connect-mongo'); // Database connection


mongoose.connect(process.env.MONGO_CONNECTION_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});
var connection = mongoose.connection;
connection.once('open', function () {
  console.log('Database connected...');
})["catch"](function (err) {
  console.log('Connection failed...');
}); // Session config

app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  store: MongoDbStore.create({
    mongoUrl: process.env.MONGO_CONNECTION_URL
  }),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  } // 24 hour

}));
app.use(flash()); //Assets

app.use(express["static"]('public'));
app.use(express.json()); //Global middlewares

app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
}); //set template engine

app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'));
app.set('view engine', 'ejs');

require('./routes/web')(app);

app.listen(3000, function () {
  console.log("Listening on port ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
