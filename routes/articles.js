var express = require('express');
var router = express.Router();

var functions = require('../apiFunctions');


// POST blog data to db
// =====================
router.post('/submit', function(req, res) {
	var id = req.param('blog_id');

	if (id) {
		functions.fetchBlogData(id)
			.then(function(responseData) {
				return functions.postNewArticle(responseData);
			}).then(function(responseObject) {
				res.status(responseObject.status).json(responseObject);
			}).catch(function(error) {
				res.status(400).json(error);
			}).done();
	} else {
		res.status(400).json({
			message: 'Please add an ID in the text box above.'
		});
	}
});

module.exports = router;