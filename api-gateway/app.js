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
  
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var index = require('./routes/index');
var apiCatalog = require('./routes/api-catalog');

var app = express();

//connection to mongoose database
mongoose.connect('mongodb://new_user1995:Mustangfunk17@cluster0-shard-00-00-wdjgd.mongodb.net:27017,cluster0-shard-00-01-wdjgd.mongodb.net:27017,cluster0-shard-00-02-wdjgd.mongodb.net:27017/api-gateway?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => console.log('connection successful')).catch((err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/api', apiCatalog);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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