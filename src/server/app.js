var createError = require('http-errors');
var express = require('express');
var path = require('path');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var cors = require('cors');
var mongoose = require('mongoose');
var JwtStrategy = require('./routes/passport');

var indexRouter = require('./routes/index');
var authRoute = require('./routes/authentication');
var usersRoute = require('./routes/users_Routes');
var moneyRoute = require('./routes/MoneyDoc_Routes');
var expanceRoute = require('./routes/Expances_Routes');

var app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Mongoose connected !'))
    .catch((err) => console.log('error', err));
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
passport.use(JwtStrategy);

app.use('/', indexRouter);
app.use('/users',passport.authenticate('jwt', { session: false }), usersRoute);
app.use('/auth', authRoute);
app.use('/money',passport.authenticate('jwt', { session: false }), moneyRoute);
app.use('/expance',passport.authenticate('jwt', { session: false }), expanceRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.send({ messege: 'default error', err });
// });

module.exports = app;
