
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var reg = require('./routes/reg');
var http = require('http');
var path = require('path');
var mongoose = require('./config/mongoose');
var MongoStore = require('connect-mongo')(express);
var config = require('./config');
var checkAuth = require('./utils/checkAuth');
var app = express();

// start

// end

// all environments
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
  secret:config.get('session:secret'),
  key: config.get('session:key'),
  cookie: config.get('session:cookie'),
  store: new MongoStore({mongoose_connection: mongoose.connection})
}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/users', user.list);
app.get('/reg', reg.index);
app.get('/logout', reg.logout);
app.get('/:id', routes.index);
app.post('/reg', reg.send);

http.createServer(app).listen(config.get('port'), function(){
  console.log('Express server listening on port ' + config.get('port'));
});
