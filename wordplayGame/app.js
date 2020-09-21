var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pattern=require('./routes/pattern_word_route');
var userword=require('./routes/user_word_routes');
var word_id=require('./routes/word_id_router');
var date_time_sort=require('./routes/words_sort_router');
var report=require('./routes/report_router');
var user_admin=require('./routes/user_admin_route');
var word_admin=require('./routes/word_router_admin');

var user=require('./routes/user_route');
var word=require('./routes/word_route');
var rating=require('./routes/rating_route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user',user);
app.use('/word_id',word_id);
app.use('/word',word);
app.use('/rating',rating);
app.use('/report',report);
app.use('/pattern',pattern);
app.use('/userword',userword);
app.use('/useradmin',user_admin);
app.use('/wordadmin',word_admin);
app.use('/sort',date_time_sort);

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
