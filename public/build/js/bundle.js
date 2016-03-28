(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 4022461808

var app = {
	init: function () {
		this.eventBindings();
	},

	eventBindings: function () {
		$('.post__submit').click(function (e) {
			e.preventDefault();

			app.fetchBlogPostById();
		});
	},

	fetchBlogPostById: function () {
		var blogId = $('.post__id').val();

		// Change submit button text to indicate process
		$('.post__submit').val('Submitting...');

		$.get('//hs-wt-api.herokuapp.com/blog?id=' + blogId).fail(function () {
			$('.post__submit').val('Oops!');
		}).success(function () {
			$('.post__submit').val('Posted!');
		}).then(function (data) {
			// console.log(data.data[0]);
			app.postBlogContents(data.data[0]);
			// app.updatePageWithBlogInfo();
		});
	},

	postBlogContents: function (post) {}
};

$(function () {
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLElBQUksTUFBTTtBQUNSLE9BQU0sWUFBVztBQUNoQixPQUFLLGFBQUwsR0FEZ0I7RUFBWDs7QUFJTixnQkFBZSxZQUFXO0FBQ3pCLElBQUUsZUFBRixFQUFtQixLQUFuQixDQUF5QixVQUFTLENBQVQsRUFBWTtBQUNwQyxLQUFFLGNBQUYsR0FEb0M7O0FBR3BDLE9BQUksaUJBQUosR0FIb0M7R0FBWixDQUF6QixDQUR5QjtFQUFYOztBQVFmLG9CQUFtQixZQUFXO0FBQzdCLE1BQUksU0FBUyxFQUFFLFdBQUYsRUFBZSxHQUFmLEVBQVQ7OztBQUR5QixHQUk3QixDQUFFLGVBQUYsRUFBbUIsR0FBbkIsQ0FBdUIsZUFBdkIsRUFKNkI7O0FBTTdCLElBQUUsR0FBRixDQUFNLHVDQUF1QyxNQUF2QyxDQUFOLENBQ0MsSUFERCxDQUNNLFlBQVc7QUFDaEIsS0FBRSxlQUFGLEVBQW1CLEdBQW5CLENBQXVCLE9BQXZCLEVBRGdCO0dBQVgsQ0FETixDQUlDLE9BSkQsQ0FJUyxZQUFXO0FBQ25CLEtBQUUsZUFBRixFQUFtQixHQUFuQixDQUF1QixTQUF2QixFQURtQjtHQUFYLENBSlQsQ0FNRyxJQU5ILENBTVEsVUFBUyxJQUFULEVBQWU7O0FBRXRCLE9BQUksZ0JBQUosQ0FBcUIsS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFyQjs7QUFGc0IsR0FBZixDQU5SLENBTjZCO0VBQVg7O0FBbUJuQixtQkFBa0IsVUFBUyxJQUFULEVBQWUsRUFBZjtDQWhDaEI7O0FBb0NILEVBQUUsWUFBVztBQUNaLEtBQUksSUFBSixHQURZO0NBQVgsQ0FBRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyA0MDIyNDYxODA4XG5cbnZhciBhcHAgPSB7XG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmV2ZW50QmluZGluZ3MoKTtcblx0XHR9LFxuXG5cdFx0ZXZlbnRCaW5kaW5nczogZnVuY3Rpb24oKSB7XG5cdFx0XHQkKCcucG9zdF9fc3VibWl0JykuY2xpY2soZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0YXBwLmZldGNoQmxvZ1Bvc3RCeUlkKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0ZmV0Y2hCbG9nUG9zdEJ5SWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGJsb2dJZCA9ICQoJy5wb3N0X19pZCcpLnZhbCgpO1xuXG5cdFx0XHQvLyBDaGFuZ2Ugc3VibWl0IGJ1dHRvbiB0ZXh0IHRvIGluZGljYXRlIHByb2Nlc3Ncblx0XHRcdCQoJy5wb3N0X19zdWJtaXQnKS52YWwoJ1N1Ym1pdHRpbmcuLi4nKTtcblxuXHRcdFx0JC5nZXQoJy8vaHMtd3QtYXBpLmhlcm9rdWFwcC5jb20vYmxvZz9pZD0nICsgYmxvZ0lkKVxuXHRcdFx0LmZhaWwoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5wb3N0X19zdWJtaXQnKS52YWwoJ09vcHMhJyk7XG5cdFx0XHR9KVxuXHRcdFx0LnN1Y2Nlc3MoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdCQoJy5wb3N0X19zdWJtaXQnKS52YWwoJ1Bvc3RlZCEnKTtcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhLmRhdGFbMF0pO1xuXHRcdFx0XHRhcHAucG9zdEJsb2dDb250ZW50cyhkYXRhLmRhdGFbMF0pO1xuXHRcdFx0XHQvLyBhcHAudXBkYXRlUGFnZVdpdGhCbG9nSW5mbygpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdHBvc3RCbG9nQ29udGVudHM6IGZ1bmN0aW9uKHBvc3QpIHtcblx0XHR9XG5cdH1cblxuXHQkKGZ1bmN0aW9uKCkge1xuXHRcdGFwcC5pbml0KCk7XG5cdH0pOyJdfQ==
