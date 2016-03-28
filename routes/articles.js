var express = require('express');
var router = express.Router();

var cors = require('cors');

var Q = require('q');

var pg = require('pg').native;
var PG_URL = process.env.DATABASE_URL || 'postgres://pwilver:@localhost/facebookIA';
var pgClient = new pg.Client(PG_URL);

pgClient.connect(function(err) {
	if (err) {
		return console.error('could not connect to postgres', err);
	} else {
		pgClient.query("CREATE TABLE IF NOT EXISTS rssItems(id serial PRIMARY KEY NOT NULL,title text,canonical_url text,guid bigint,meta_description text,publish_date bigint,author text)", function(err, result) {
			if (err) { 
				return console.error('error creating table', err ); 
			}
		});

		return console.log('Connected to postgres!');
	}
});



// POST blog data to db
// =====================

router.post('/submit', function(req, res) {
	// 
});

module.exports = router;