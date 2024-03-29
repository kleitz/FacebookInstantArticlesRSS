var cors = require('cors');
var express = require('express');
var path = require('path');

// R O U T E S
var routes = require('./routes/index');
var articles = require('./routes/articles');
var rss = require('./routes/rss-feed');

var app = express();

var whitelist = [
	'http://blog.hubspot.com',
	'https://blog.hubspot.com',
	'http://www.hubspot.com'
];

var corsOptions = {
	origin: function(origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	}
};

app.use(cors(corsOptions));

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ROUTES
app.use('/', routes);
app.use('/article', articles);
app.use('/rss', rss);

app.listen(8080);