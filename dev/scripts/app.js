$(document).ready(function(){

	$('.landing__hamburgerMenu').click(function(){
		$('#nav-icon').toggleClass('open');
		$('ul').addClass('flex');

		if ($('#nav-icon').hasClass('open')){
			$('ul').addClass('openNav');
		} else {
			$('ul').removeClass('openNav');
		}
	});

	$("a").on('click', function(e) {
		let hash = this.hash;
				
		if (this.hash !== "") {
			event.preventDefault();
			$('html, body').animate({

			scrollTop: $(hash).offset().top - 50
			}, 600, function(){});
		} 

	});

	$(window).on('resize', function(){
		const win = $(this);
		if (win.width() < 651) {
			$('#nav-icon').removeClass('open');
			$('ul').removeClass('openNav');
			
		} if (win.width() > 650) {
			$('ul').removeClass('flex');
			$('ul').addClass('openNav');
		} 
	});


});


if ($(window).width() > 650 ){
	$('ul').addClass('openNav');
}
