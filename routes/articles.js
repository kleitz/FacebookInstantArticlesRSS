var express = require('express');
var router = express.Router();

var cors = require('cors');

var Q = require('q');

var pg = require('pg').native;
var PG_URL = process.env.DATABASE_URL || 'postgres://pwilver:@localhost/rssfeed';
var pgClient = new pg.Client(PG_URL);

pgClient.connect(function(err) {
	if (err) {
		return console.error('could not connect to postgres', err);
	} else {
		pgClient.query("CREATE TABLE IF NOT EXISTS test(number integer,value text)", function(err, result) {
			if (err) { 
				return console.error('error creating table', err ); 
			}
		});

		return console.log('Connected to postgres!');
	}
});


// R O U T E
// =========
router.get('/article/new', function() {
	// 
});

router.post('/article/submit', function(req, res) {
	// 
});