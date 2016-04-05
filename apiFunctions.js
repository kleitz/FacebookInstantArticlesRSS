var cheerio = require('cheerio');
var request = require('request');
var Q = require('q');

var pg = require('pg').native;
var PG_URL = process.env.DATABASE_URL || 'postgres://pwilver:@localhost/facebookia';
var pgClient = new pg.Client(PG_URL);


// Connect to db
pgClient.connect(function(err) {
	if (err) {
		return console.error('could not connect to postgres', err);
	} else {
		pgClient.query("CREATE TABLE IF NOT EXISTS rssfeed (id serial PRIMARY KEY NOT NULL,title text,canonical_url text,guid bigint,meta_description text,publish_date bigint,author text,featured_image text,post_body text NOT NULL)", function(err, result) {
			if (err) { 
				return console.error('error creating table', err ); 
			}
		});

		return console.log('Connected to postgres!');
	}
});



functions = {
	fetchBlogData: function(id) {
		var deferred = Q.defer();

		// var url = 'https://hs-wt-api.herokuapp.com/blog?id=' + id;
		var url = 'http://localhost:5678/blog?id=' + id;

		request(url, function(err, res, body) {
			var response = JSON.parse(body);

			if (response.data != 0 && res.statusCode == 200) {
				deferred.resolve(response);
			} else {
				deferred.reject({
					error: err,
					message: 'Please check ID: ' + id,
					id: id
				});
			}
		});

		return deferred.promise;
	},

	postNewArticle: function(post) {
		var deferred = Q.defer();

		var data = post.data[0];

		// Remove protocol from links
		var featuredImageUrlParts = data.featured_image.split(':'),
			featuredImageUrl = featuredImageUrlParts[featuredImageUrlParts.length - 1];
		var canonicalUrlParts = data.url.split(':'),
			canonicalUrl = canonicalUrlParts[canonicalUrlParts.length - 1];

		// Set values for data table rows
		var title = data.name,
			canonical_url = canonicalUrl,
			id = data.id,
			meta_description = data.meta_description,
			publish_date = data.publish_date,
			author = data.blog_author.full_name,
			featured_image = featuredImageUrl;

		$ = cheerio.load(data.rss_body);
				
		$('p').first().remove();
		var post_body = $.html();

		pgClient.query('INSERT INTO rssfeed (title, canonical_url, guid, meta_description, publish_date, author, featured_image, post_body) SELECT $1, $2, $3, $4, $5, $6, $7, $8 WHERE NOT EXISTS (SELECT 1 FROM rssfeed WHERE guid = $3)', [title, canonical_url, id, meta_description, publish_date, author, featured_image, post_body] , function(err, result) {
			if (!err) {
				deferred.resolve({
					message: 'Blog "' + title + '" successfully published!',
					status: 200
				});
			} else {
				deferred.reject({
					message: err,
					status: 500
				});
			}
		});

		return deferred.promise;
	},

	fetchRssFeedItems: function() {
		var deferred = Q.defer();

		pgClient.query('SELECT * FROM rssfeed', function(err, result) {
			if (!err) {
				deferred.resolve(result.rows);
			} else {
				deferred.reject({
					message: 'Error retrieving RSS articles. Please try again later.',
					status: 500
				});
			}
		});

		return deferred.promise;
	}
}

module.exports = functions;