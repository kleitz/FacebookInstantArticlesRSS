var express = require('express');
var router = express.Router();
var request = require('request');
var Q = require('q');

var functions = require('../apiFunctions');

var pg = require('pg').native;
var PG_URL = process.env.DATABASE_URL || 'postgres://pwilver:@localhost/facebookia';
var pgClient = new pg.Client(PG_URL);


// Connect to db
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
	var id = req.param('blog_id'),
		postData;

	functions.fetchBlogData(id).then(function(data) {
		postData = data.data[0];
	});

	var title = postData.name,
		canonical_url = postData.url,
		meta_description = postData.meta_description,
		publish_date = postData.publish_date,
		author = postData.blog_author.full_name;

	// 	functions.postNewArticle(title, canonical_url, id, meta_description, publish_date, author).then(function(response) {
	// 		res.status(response.status).json(response);
	// 	});
	// });
});

module.exports = router;