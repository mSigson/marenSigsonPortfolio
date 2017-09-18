$(document).ready(function(){

	$('#nav-icon').click(function(){
		$('ul').toggleClass('openNav');
	});

	$("a").on('click', function(event) {
		var hash = this.hash;
		$('ul').toggleClass('openNav');
				
		if (this.hash !== "") {
			event.preventDefault();

			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 600, function(){
			window.location.hash = hash;
			});
		} 
	});

});