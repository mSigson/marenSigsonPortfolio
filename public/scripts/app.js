(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	$('.landing__hamburgerMenu').click(function () {
		$('#nav-icon').toggleClass('open');
		$('ul').toggleClass('openNav');
	});

	$("a").on('click', function (e) {
		var hash = this.hash;

		if ($(window).width() < 690) {
			$('#nav-icon').toggleClass('open');
			$('ul').toggleClass('openNav');
		}

		if (this.hash !== "") {
			event.preventDefault();
			$('html, body').animate({

				scrollTop: $(hash).offset().top - 50
			}, 600, function () {});
		}
	});

	$('section').on('click', function (e) {
		var clickover = $(event.target);
		var $navbar = $("ul");
		var _opened = $navbar.hasClass("openNav");

		if (_opened === true) {
			$navbar.removeClass("openNav");
			$('#nav-icon').removeClass('open');
		}
	});
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFM0IsR0FBRSx5QkFBRixFQUE2QixLQUE3QixDQUFtQyxZQUFVO0FBQzVDLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFDQSxJQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsRUFIRDs7QUFLQSxHQUFFLEdBQUYsRUFBTyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFTLENBQVQsRUFBWTtBQUM5QixNQUFJLE9BQU8sS0FBSyxJQUFoQjs7QUFFQSxNQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsS0FBb0IsR0FBeEIsRUFBNEI7QUFDM0IsS0FBRSxXQUFGLEVBQWUsV0FBZixDQUEyQixNQUEzQjtBQUNBLEtBQUUsSUFBRixFQUFRLFdBQVIsQ0FBb0IsU0FBcEI7QUFDQTs7QUFFRCxNQUFJLEtBQUssSUFBTCxLQUFjLEVBQWxCLEVBQXNCO0FBQ3JCLFNBQU0sY0FBTjtBQUNBLEtBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3Qjs7QUFFeEIsZUFBVyxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWpCLEdBQXVCO0FBRlYsSUFBeEIsRUFHRyxHQUhILEVBR1EsWUFBVSxDQUFFLENBSHBCO0FBSUE7QUFFRCxFQWhCRDs7QUFrQkEsR0FBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF3QixVQUFTLENBQVQsRUFBWTtBQUNuQyxNQUFNLFlBQVksRUFBRSxNQUFNLE1BQVIsQ0FBbEI7QUFDQSxNQUFNLFVBQVUsRUFBRSxJQUFGLENBQWhCO0FBQ0EsTUFBTSxVQUFVLFFBQVEsUUFBUixDQUFpQixTQUFqQixDQUFoQjs7QUFFQSxNQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDckIsV0FBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsS0FBRSxXQUFGLEVBQWUsV0FBZixDQUEyQixNQUEzQjtBQUNBO0FBQ0QsRUFURDtBQVdBLENBcENEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0JCgnLmxhbmRpbmdfX2hhbWJ1cmdlck1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCQoJyNuYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cdFx0JCgndWwnKS50b2dnbGVDbGFzcygnb3Blbk5hdicpO1xuXHR9KTtcblxuXHQkKFwiYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0bGV0IGhhc2ggPSB0aGlzLmhhc2g7XG5cblx0XHRpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA2OTApe1xuXHRcdFx0JCgnI25hdi1pY29uJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdCQoJ3VsJykudG9nZ2xlQ2xhc3MoJ29wZW5OYXYnKTtcblx0XHR9XG5cdFx0XHRcdFxuXHRcdGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cblx0XHRcdHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3AgLSA1MFxuXHRcdFx0fSwgNjAwLCBmdW5jdGlvbigpe30pO1xuXHRcdH0gXG5cblx0fSk7XG5cblx0JCgnc2VjdGlvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oZSkge1xuXHRcdGNvbnN0IGNsaWNrb3ZlciA9ICQoZXZlbnQudGFyZ2V0KTtcblx0XHRjb25zdCAkbmF2YmFyID0gJChcInVsXCIpO1xuXHRcdGNvbnN0IF9vcGVuZWQgPSAkbmF2YmFyLmhhc0NsYXNzKFwib3Blbk5hdlwiKTtcblxuXHRcdGlmIChfb3BlbmVkID09PSB0cnVlKSB7XG5cdFx0XHQkbmF2YmFyLnJlbW92ZUNsYXNzKFwib3Blbk5hdlwiKVxuXHRcdFx0JCgnI25hdi1pY29uJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHR9XG5cdH0pO1xuXG59KTsiXX0=
