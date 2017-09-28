(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	$('.landing__hamburgerMenu').click(function () {
		$('#nav-icon').toggleClass('open');
	});

	$("a").on('click', function (e) {
		var hash = this.hash;

		if (this.hash !== "") {
			event.preventDefault();
			$('html, body').animate({

				scrollTop: $(hash).offset().top - 50
			}, 600, function () {});
		}

		document.getElementById("toggle").checked = false;

		$('#nav-icon').toggleClass('open');
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFM0IsR0FBRSx5QkFBRixFQUE2QixLQUE3QixDQUFtQyxZQUFVO0FBQzVDLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFFQSxFQUhEOztBQUtBLEdBQUUsR0FBRixFQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVMsQ0FBVCxFQUFZO0FBQzlCLE1BQUksT0FBTyxLQUFLLElBQWhCOztBQUVBLE1BQUksS0FBSyxJQUFMLEtBQWMsRUFBbEIsRUFBc0I7QUFDckIsU0FBTSxjQUFOO0FBQ0EsS0FBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCOztBQUV4QixlQUFXLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUI7QUFGVixJQUF4QixFQUdHLEdBSEgsRUFHUSxZQUFVLENBQUUsQ0FIcEI7QUFJQTs7QUFFRCxXQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0MsT0FBbEMsR0FBNEMsS0FBNUM7O0FBRUEsSUFBRSxXQUFGLEVBQWUsV0FBZixDQUEyQixNQUEzQjtBQUNBLEVBZEQ7QUFlQSxDQXRCRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG5cdCQoJy5sYW5kaW5nX19oYW1idXJnZXJNZW51JykuY2xpY2soZnVuY3Rpb24oKXtcblx0XHQkKCcjbmF2LWljb24nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuXG5cdH0pO1xuXG5cdCQoXCJhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgaGFzaCA9IHRoaXMuaGFzaDtcblx0XHRcdFx0XG5cdFx0aWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblxuXHRcdFx0c2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDUwXG5cdFx0XHR9LCA2MDAsIGZ1bmN0aW9uKCl7fSk7XG5cdFx0fSBcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlXCIpLmNoZWNrZWQgPSBmYWxzZTtcblxuXHRcdCQoJyNuYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cdH0pO1xufSk7XG4iXX0=
