// 4022461808

var app = {
		init: function() {
			this.eventBindings();
		},

		eventBindings: function() {
			$('.post__submit').click(function(e) {
				e.preventDefault();

				app.postBlogContents();
			});
		},

		postBlogContents: function(post) {
			var $form = $('.hs-form');

			// Change submit button text to indicate process
			$('.post__submit').val('Submitting...');

			$.post('//localhost:8080/article/submit?' + $form.serialize())
				.done(function(data) {
					console.log(data.message);
					$('.post__submit').val('Posted!');
				})
				.fail(function(data) {
					console.log(data.message);
					$('.post__submit').val('Oops!');
			});
		}
	}

	$(function() {
		app.init();
	});