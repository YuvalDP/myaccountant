var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var JwtStrategy = require('./routes/passport');

var indexRouter = require('./routes/index');
var authRoute = require('./routes/authentication');

var app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Mongoose connected !'))
    .catch((err) => console.log('error', err));
require('dotenv').config()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
passport.use(JwtStrategy);

app.use('/', indexRouter);
app.use('/auth', authRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
