// 4022461808

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

			// Change submit button text to indicate process
			$('.post__submit').val('Submitting...');

			$.get('//hs-wt-api.herokuapp.com/blog?id=' + blogId)
			.fail(function() {
				$('.post__submit').val('Oops!');
			})
			.success(function() {
				$('.post__submit').val('Posted!');
			}).then(function(data) {
				// console.log(data.data[0]);
				app.postBlogContents(data.data[0]);
				// app.updatePageWithBlogInfo();
			});
		},

		postBlogContents: function(post) {
		}
	}

	$(function() {
		app.init();
	});