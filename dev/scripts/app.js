$(document).ready(function(){

	$('.landing__hamburgerMenu').click(function(){
		$('#nav-icon').toggleClass('open');

	});

	$("a").on('click', function(e) {
		let hash = this.hash;
				
		if (this.hash !== "") {
			event.preventDefault();
			$('html, body').animate({

			scrollTop: $(hash).offset().top - 50
			}, 600, function(){});
		} 

		document.getElementById("toggle").checked = false;

		$('#nav-icon').toggleClass('open');
	});
});
