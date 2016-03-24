var app = {
	init: function() {
		this.eventBindings();
	},

	eventBindings: function() {
		$('.post__submit').click(function(e) {
			e.preventDefault();

			app.fetchBlogPostById();
		});
	},

	fetchBlogPostById: function() {
		var blogId = $('.post__id').val();

		if (!blogId) {
			console.log('nothing here');
		} else {
			$.get('//hs-wt-api.herokuapp.com/blog?id=' + blogId)
			.fail(function() {
				// 
			}).then(function(data) {
				console.log(data);
			});
		}
	}
}

$(function() {
	app.init();
});