const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

let indexRouter = require('./routes/index');
let studentsRouter = require('./routes/students');
let announcementRouter = require('./routes/announcement');
let problemsRouter = require('./routes/problems');
let courseRouter = require('./routes/course');
let chapterRouter = require('./routes/chapter')
let submission = require('./routes/submission')
const app = express();

// 解决跨域
app.all('*', function(req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/announcement',announcementRouter);
app.use('/problems', problemsRouter);
app.use('/course',courseRouter);
app.use('/chapter',chapterRouter)
app.use('/submission',submission)

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

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

module.exports = app;
