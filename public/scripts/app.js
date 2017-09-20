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
			$('section').on('click', function (e) {
				$('ul').removeClass('openNav');
			});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsUUFBRixFQUFZLEtBQVosQ0FBa0IsWUFBVTs7QUFFM0IsR0FBRSx5QkFBRixFQUE2QixLQUE3QixDQUFtQyxZQUFVO0FBQzVDLElBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFDQSxJQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLE1BQWpCOztBQUVBLE1BQUksRUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QixNQUF4QixDQUFKLEVBQW9DO0FBQ25DLEtBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsU0FBakI7QUFDQSxHQUZELE1BRU87QUFDTixLQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0E7QUFDRCxFQVREOztBQVdBLEdBQUUsR0FBRixFQUFPLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVMsQ0FBVCxFQUFZO0FBQzlCLE1BQUksT0FBTyxLQUFLLElBQWhCOztBQUVBLE1BQUksS0FBSyxJQUFMLEtBQWMsRUFBbEIsRUFBc0I7QUFDckIsU0FBTSxjQUFOO0FBQ0EsS0FBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCOztBQUV4QixlQUFXLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUI7QUFGVixJQUF4QixFQUdHLEdBSEgsRUFHUSxZQUFVLENBQUUsQ0FIcEI7QUFJQTtBQUVELEVBWEQ7O0FBYUEsR0FBRSxNQUFGLEVBQVUsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVTtBQUNoQyxNQUFNLE1BQU0sRUFBRSxJQUFGLENBQVo7QUFDQSxNQUFJLElBQUksS0FBSixLQUFjLEdBQWxCLEVBQXVCO0FBQ3RCLEtBQUUsV0FBRixFQUFlLFdBQWYsQ0FBMkIsTUFBM0I7QUFDQSxLQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsS0FBRSxTQUFGLEVBQWEsRUFBYixDQUFnQixPQUFoQixFQUF5QixVQUFTLENBQVQsRUFBWTtBQUNwQyxNQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFNBQXBCO0FBQ0EsSUFGRDtBQUdBLEdBQUMsSUFBSSxJQUFJLEtBQUosS0FBYyxHQUFsQixFQUF1QjtBQUN4QixLQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLE1BQXBCO0FBQ0EsS0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixTQUFqQjtBQUNBO0FBQ0QsRUFaRDtBQWVBLENBekNEOztBQTRDQSxJQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsS0FBb0IsR0FBeEIsRUFBNkI7QUFDNUIsR0FBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixTQUFqQjtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblx0JCgnLmxhbmRpbmdfX2hhbWJ1cmdlck1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xuXHRcdCQoJyNuYXYtaWNvbicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG5cdFx0JCgndWwnKS5hZGRDbGFzcygnZmxleCcpO1xuXG5cdFx0aWYgKCQoJyNuYXYtaWNvbicpLmhhc0NsYXNzKCdvcGVuJykpe1xuXHRcdFx0JCgndWwnKS5hZGRDbGFzcygnb3Blbk5hdicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCd1bCcpLnJlbW92ZUNsYXNzKCdvcGVuTmF2Jyk7XG5cdFx0fVxuXHR9KTtcblxuXHQkKFwiYVwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0bGV0IGhhc2ggPSB0aGlzLmhhc2g7XG5cdFx0XHRcdFxuXHRcdGlmICh0aGlzLmhhc2ggIT09IFwiXCIpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG5cblx0XHRcdHNjcm9sbFRvcDogJChoYXNoKS5vZmZzZXQoKS50b3AgLSA1MFxuXHRcdFx0fSwgNjAwLCBmdW5jdGlvbigpe30pO1xuXHRcdH0gXG5cblx0fSk7XG5cblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHRcdGNvbnN0IHdpbiA9ICQodGhpcyk7XG5cdFx0aWYgKHdpbi53aWR0aCgpIDwgNjUxKSB7XG5cdFx0XHQkKCcjbmF2LWljb24nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXHRcdFx0JCgndWwnKS5yZW1vdmVDbGFzcygnb3Blbk5hdicpO1xuXHRcdFx0JCgnc2VjdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0JCgndWwnKS5yZW1vdmVDbGFzcygnb3Blbk5hdicpO1xuXHRcdFx0fSk7XG5cdFx0fSBpZiAod2luLndpZHRoKCkgPiA2NTApIHtcblx0XHRcdCQoJ3VsJykucmVtb3ZlQ2xhc3MoJ2ZsZXgnKTtcblx0XHRcdCQoJ3VsJykuYWRkQ2xhc3MoJ29wZW5OYXYnKTtcblx0XHR9IFxuXHR9KTtcblxuXG59KTtcblxuXG5pZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA2NTAgKXtcblx0JCgndWwnKS5hZGRDbGFzcygnb3Blbk5hdicpO1xufVxuIl19
