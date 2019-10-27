/*
============================================
; Author: Richard Krasso
; Modified by: Karie Funk
; Title: API Gateway
; Date: 10/27/2019
; Description: API Gateway Part I & II
;===========================================
*/

//requirements
var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
var indexRouter = require('./routes/index');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var apiCatalog = require('./routes/api-catalog');

//connection to mongoose database
mongoose.connect('mongodb://admin:admin@ds121588.mlab.com:21588/mean-library', {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log('connection successful')).catch((err) => console.error(err));


//use statements
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api', apiCatalog);

//error handler page
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //will render the error handler page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
