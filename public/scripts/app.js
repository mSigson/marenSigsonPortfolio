(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	$('.landing__hamburgerMenu').click(function () {
		$('#nav-icon').toggleClass('open');
		// $('ul').addClass('flex');

		// if ($('#nav-icon').hasClass('open')){
		// 	$('ul').addClass('openNav');
		// } else {
		// 	$('ul').removeClass('openNav');
		// }
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

	// $(window).on('resize', function(){
	// 	const win = $(this);
	// 	if (win.width() < 651) {
	// 		$('#nav-icon').removeClass('open');
	// 		$('ul').removeClass('openNav');

	// 	} if (win.width() > 650) {
	// 		$('ul').removeClass('flex');
	// 		$('ul').addClass('openNav');
	// 	} 
	// });

});

// if ($(window).width() > 650 ){
// 	$('ul').addClass('openNav');
// }

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFM0IsR0FBRSx5QkFBRixFQUE2QixLQUE3QixDQUFtQyxZQUFVO0FBQzVDLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFURDs7QUFXQSxHQUFFLEdBQUYsRUFBTyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFTLENBQVQsRUFBWTtBQUM5QixNQUFJLE9BQU8sS0FBSyxJQUFoQjs7QUFFQSxNQUFJLEtBQUssSUFBTCxLQUFjLEVBQWxCLEVBQXNCO0FBQ3JCLFNBQU0sY0FBTjtBQUNBLEtBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3Qjs7QUFFeEIsZUFBVyxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWpCLEdBQXVCO0FBRlYsSUFBeEIsRUFHRyxHQUhILEVBR1EsWUFBVSxDQUFFLENBSHBCO0FBSUE7QUFFRCxFQVhEOztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxDQXZDRDs7QUEwQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0JCgnLmxhbmRpbmdfX2hhbWJ1cmdlck1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCQoJyNuYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cdFx0Ly8gJCgndWwnKS5hZGRDbGFzcygnZmxleCcpO1xuXG5cdFx0Ly8gaWYgKCQoJyNuYXYtaWNvbicpLmhhc0NsYXNzKCdvcGVuJykpe1xuXHRcdC8vIFx0JCgndWwnKS5hZGRDbGFzcygnb3Blbk5hdicpO1xuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHQkKCd1bCcpLnJlbW92ZUNsYXNzKCdvcGVuTmF2Jyk7XG5cdFx0Ly8gfVxuXHR9KTtcblxuXHQkKFwiYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0bGV0IGhhc2ggPSB0aGlzLmhhc2g7XG5cdFx0XHRcdFxuXHRcdGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cblx0XHRcdHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3AgLSA1MFxuXHRcdFx0fSwgNjAwLCBmdW5jdGlvbigpe30pO1xuXHRcdH0gXG5cblx0fSk7XG5cblx0Ly8gJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHQvLyBcdGNvbnN0IHdpbiA9ICQodGhpcyk7XG5cdC8vIFx0aWYgKHdpbi53aWR0aCgpIDwgNjUxKSB7XG5cdC8vIFx0XHQkKCcjbmF2LWljb24nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXHQvLyBcdFx0JCgndWwnKS5yZW1vdmVDbGFzcygnb3Blbk5hdicpO1xuXHRcdFx0XG5cdC8vIFx0fSBpZiAod2luLndpZHRoKCkgPiA2NTApIHtcblx0Ly8gXHRcdCQoJ3VsJykucmVtb3ZlQ2xhc3MoJ2ZsZXgnKTtcblx0Ly8gXHRcdCQoJ3VsJykuYWRkQ2xhc3MoJ29wZW5OYXYnKTtcblx0Ly8gXHR9IFxuXHQvLyB9KTtcblxuXG59KTtcblxuXG4vLyBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA2NTAgKXtcbi8vIFx0JCgndWwnKS5hZGRDbGFzcygnb3Blbk5hdicpO1xuLy8gfVxuIl19
