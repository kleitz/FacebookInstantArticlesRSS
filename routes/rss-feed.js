var express = require('express');
var router = express.Router();

var functions = require('../apiFunctions');

// Retrieve data from database
// Show it on page (EJS)


// GET rss feed contents
// ======================

router.get('/', function(req, res) {
	functions.fetchRssFeedItems()
		.then(function(items) {
			res.locals = { items: items };
			res.render('rss-feed');
		}).catch(function(error) {
			res.status(error.status).send(error.message);
	});
});

module.exports = router;