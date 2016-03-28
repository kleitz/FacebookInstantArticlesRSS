(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

	postBlogContents: function (post) {
		console.log(post.featured_image);
	}
};

$(function () {
	app.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLE1BQU07QUFDUixPQUFNLFlBQVc7QUFDaEIsT0FBSyxhQUFMLEdBRGdCO0VBQVg7O0FBSU4sZ0JBQWUsWUFBVztBQUN6QixJQUFFLGVBQUYsRUFBbUIsS0FBbkIsQ0FBeUIsVUFBUyxDQUFULEVBQVk7QUFDcEMsS0FBRSxjQUFGLEdBRG9DOztBQUdwQyxPQUFJLGlCQUFKLEdBSG9DO0dBQVosQ0FBekIsQ0FEeUI7RUFBWDs7QUFRZixvQkFBbUIsWUFBVztBQUM3QixNQUFJLFNBQVMsRUFBRSxXQUFGLEVBQWUsR0FBZixFQUFUOzs7QUFEeUIsR0FJN0IsQ0FBRSxlQUFGLEVBQW1CLEdBQW5CLENBQXVCLGVBQXZCLEVBSjZCOztBQU03QixJQUFFLEdBQUYsQ0FBTSx1Q0FBdUMsTUFBdkMsQ0FBTixDQUNDLElBREQsQ0FDTSxZQUFXO0FBQ2hCLEtBQUUsZUFBRixFQUFtQixHQUFuQixDQUF1QixPQUF2QixFQURnQjtHQUFYLENBRE4sQ0FJQyxPQUpELENBSVMsWUFBVztBQUNuQixLQUFFLGVBQUYsRUFBbUIsR0FBbkIsQ0FBdUIsU0FBdkIsRUFEbUI7R0FBWCxDQUpULENBTUcsSUFOSCxDQU1RLFVBQVMsSUFBVCxFQUFlOztBQUV0QixPQUFJLGdCQUFKLENBQXFCLEtBQUssSUFBTCxDQUFVLENBQVYsQ0FBckI7O0FBRnNCLEdBQWYsQ0FOUixDQU42QjtFQUFYOztBQW1CbkIsbUJBQWtCLFVBQVMsSUFBVCxFQUFlO0FBQ2hDLFVBQVEsR0FBUixDQUFZLEtBQUssY0FBTCxDQUFaLENBRGdDO0VBQWY7Q0FoQ2hCOztBQXFDSCxFQUFFLFlBQVc7QUFDWixLQUFJLElBQUosR0FEWTtDQUFYLENBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGFwcCA9IHtcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuZXZlbnRCaW5kaW5ncygpO1xuXHRcdH0sXG5cblx0XHRldmVudEJpbmRpbmdzOiBmdW5jdGlvbigpIHtcblx0XHRcdCQoJy5wb3N0X19zdWJtaXQnKS5jbGljayhmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRhcHAuZmV0Y2hCbG9nUG9zdEJ5SWQoKTtcblx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRmZXRjaEJsb2dQb3N0QnlJZDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYmxvZ0lkID0gJCgnLnBvc3RfX2lkJykudmFsKCk7XG5cblx0XHRcdC8vIENoYW5nZSBzdWJtaXQgYnV0dG9uIHRleHQgdG8gaW5kaWNhdGUgcHJvY2Vzc1xuXHRcdFx0JCgnLnBvc3RfX3N1Ym1pdCcpLnZhbCgnU3VibWl0dGluZy4uLicpO1xuXG5cdFx0XHQkLmdldCgnLy9ocy13dC1hcGkuaGVyb2t1YXBwLmNvbS9ibG9nP2lkPScgKyBibG9nSWQpXG5cdFx0XHQuZmFpbChmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLnBvc3RfX3N1Ym1pdCcpLnZhbCgnT29wcyEnKTtcblx0XHRcdH0pXG5cdFx0XHQuc3VjY2VzcyhmdW5jdGlvbigpIHtcblx0XHRcdFx0JCgnLnBvc3RfX3N1Ym1pdCcpLnZhbCgnUG9zdGVkIScpO1xuXHRcdFx0fSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGRhdGEuZGF0YVswXSk7XG5cdFx0XHRcdGFwcC5wb3N0QmxvZ0NvbnRlbnRzKGRhdGEuZGF0YVswXSk7XG5cdFx0XHRcdC8vIGFwcC51cGRhdGVQYWdlV2l0aEJsb2dJbmZvKCk7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0cG9zdEJsb2dDb250ZW50czogZnVuY3Rpb24ocG9zdCkge1xuXHRcdFx0Y29uc29sZS5sb2cocG9zdC5mZWF0dXJlZF9pbWFnZSk7XG5cdFx0fVxuXHR9XG5cblx0JChmdW5jdGlvbigpIHtcblx0XHRhcHAuaW5pdCgpO1xuXHR9KTsiXX0=
