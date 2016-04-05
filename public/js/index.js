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

		postBlogContents: function() {
			var $form = $('.hs-form');

			// Remove any error messages on page
			$('.submit--message').html('&nbsp;');

			// Change submit button text to indicate process
			$('.post__submit').val('Submitting...');

			$.post('//localhost:8080/article/submit?' + $form.serialize())
				.done(function(data) {
					$('.post__submit').val('Posted!');

					if ($('.submit--message').length < 1) {
						var $successMessage = $('<p>')
							.addClass('submit--message')
							.css({ 'text-align': 'center' });
						$form.after($successMessage);
					}

					$('.submit--message').html('Whoopee! ' + data.message);
				})
				.fail(function(data) {
					var response = JSON.parse(data.responseText);

					$('.post__submit').val('Oops!');

					if ($('.submit--message').length < 1) {
						var $failMessage = $('<p>')
							.addClass('submit--message')
							.css({ 'text-align': 'center' });
						$form.after($failMessage);
					}

					$('.submit--message').html('Unable to add blog post. ' + response.message);
			});
		}
	}

	$(function() {
		app.init();
	});