$(document).ready(function(){

	$('.landing__hamburgerMenu').click(function(){
		$('#nav-icon').toggleClass('open');
		$('ul').toggleClass('openNav');
	});

	$("a").on('click', function(event) {
		let hash = this.hash;
				
		if (this.hash !== "") {
			event.preventDefault();
			$('html, body').animate({

			scrollTop: $(hash).offset().top - 50
			}, 600, function(){});
		} 
	});

	$('section').on('click',function(e) {
		const clickover = $(event.target);
		const $navbar = $("ul");
		const _opened = $navbar.hasClass("openNav");

		if (_opened === true) {
			$navbar.removeClass("openNav")
			$('#nav-icon').removeClass('open');
		}
	});

});