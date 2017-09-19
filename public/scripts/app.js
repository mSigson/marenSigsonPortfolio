(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	$('.landing__hamburgerMenu').click(function () {
		$('#nav-icon').toggleClass('open');
		$('ul').addClass('flex');

		if ($('#nav-icon').hasClass('open')) {
			$('ul').addClass('openNav');
		} else {
			$('ul').removeClass('openNav');
		}
	});

	$("a").on('click', function (e) {
		var hash = this.hash;

		if (this.hash !== "") {
			event.preventDefault();
			$('html, body').animate({

				scrollTop: $(hash).offset().top - 50
			}, 600, function () {});
		}
	});

	$(window).on('resize', function () {
		var win = $(this);
		if (win.width() < 651) {
			$('#nav-icon').removeClass('open');
			$('ul').removeClass('openNav');
		}if (win.width() > 650) {
			$('ul').removeClass('flex');
			$('ul').addClass('openNav');
		}
	});
});

if ($(window).width() > 650) {
	$('ul').addClass('openNav');
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFM0IsR0FBRSx5QkFBRixFQUE2QixLQUE3QixDQUFtQyxZQUFVO0FBQzVDLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFDQSxJQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLE1BQWpCOztBQUVBLE1BQUksRUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixNQUF4QixDQUFKLEVBQW9DO0FBQ25DLEtBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsU0FBakI7QUFDQSxHQUZELE1BRU87QUFDTixLQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0E7QUFDRCxFQVREOztBQVdBLEdBQUUsR0FBRixFQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVMsQ0FBVCxFQUFZO0FBQzlCLE1BQUksT0FBTyxLQUFLLElBQWhCOztBQUVBLE1BQUksS0FBSyxJQUFMLEtBQWMsRUFBbEIsRUFBc0I7QUFDckIsU0FBTSxjQUFOO0FBQ0EsS0FBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCOztBQUV4QixlQUFXLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUI7QUFGVixJQUF4QixFQUdHLEdBSEgsRUFHUSxZQUFVLENBQUUsQ0FIcEI7QUFJQTtBQUVELEVBWEQ7O0FBYUEsR0FBRSxNQUFGLEVBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVTtBQUNoQyxNQUFNLE1BQU0sRUFBRSxJQUFGLENBQVo7QUFDQSxNQUFJLElBQUksS0FBSixLQUFjLEdBQWxCLEVBQXVCO0FBQ3RCLEtBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFDQSxLQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsR0FBQyxJQUFJLElBQUksS0FBSixLQUFjLEdBQWxCLEVBQXVCO0FBQ3hCLEtBQUUsSUFBRixFQUFRLFdBQVIsQ0FBb0IsTUFBcEI7QUFDQSxLQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFNBQWpCO0FBQ0E7QUFDRCxFQVREO0FBWUEsQ0F0Q0Q7O0FBeUNBLElBQUksRUFBRSxNQUFGLEVBQVUsS0FBVixLQUFvQixHQUF4QixFQUE2QjtBQUM1QixHQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFNBQWpCO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuXHQkKCcubGFuZGluZ19faGFtYnVyZ2VyTWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0JCgnI25hdi1pY29uJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblx0XHQkKCd1bCcpLmFkZENsYXNzKCdmbGV4Jyk7XG5cblx0XHRpZiAoJCgnI25hdi1pY29uJykuaGFzQ2xhc3MoJ29wZW4nKSl7XG5cdFx0XHQkKCd1bCcpLmFkZENsYXNzKCdvcGVuTmF2Jyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQoJ3VsJykucmVtb3ZlQ2xhc3MoJ29wZW5OYXYnKTtcblx0XHR9XG5cdH0pO1xuXG5cdCQoXCJhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRsZXQgaGFzaCA9IHRoaXMuaGFzaDtcblx0XHRcdFx0XG5cdFx0aWYgKHRoaXMuaGFzaCAhPT0gXCJcIikge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcblxuXHRcdFx0c2Nyb2xsVG9wOiAkKGhhc2gpLm9mZnNldCgpLnRvcCAtIDUwXG5cdFx0XHR9LCA2MDAsIGZ1bmN0aW9uKCl7fSk7XG5cdFx0fSBcblxuXHR9KTtcblxuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG5cdFx0Y29uc3Qgd2luID0gJCh0aGlzKTtcblx0XHRpZiAod2luLndpZHRoKCkgPCA2NTEpIHtcblx0XHRcdCQoJyNuYXYtaWNvbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdFx0XHQkKCd1bCcpLnJlbW92ZUNsYXNzKCdvcGVuTmF2Jyk7XG5cdFx0fSBpZiAod2luLndpZHRoKCkgPiA2NTApIHtcblx0XHRcdCQoJ3VsJykucmVtb3ZlQ2xhc3MoJ2ZsZXgnKTtcblx0XHRcdCQoJ3VsJykuYWRkQ2xhc3MoJ29wZW5OYXYnKTtcblx0XHR9IFxuXHR9KTtcblxuXG59KTtcblxuXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA2NTAgKXtcblx0JCgndWwnKS5hZGRDbGFzcygnb3Blbk5hdicpO1xufVxuIl19
