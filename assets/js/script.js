$(document).ready(function(){

	// Nav Toggle
	$('#toggleNav-icon').click(function(){
		$(this).toggleClass('open');
		$('.menu').slideToggle();
	});

  	// all_single_client_satisfied
	$('.all_single_client_satisfied').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		nav: true,
		margin: 27,
		responsiveBaseElement: 'body',
		navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1220: {
				items: 3,
			},
		},
	});

  	// all_team_members
	$('.all_team_members').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		margin: 27,
		responsiveBaseElement: 'body',
		navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			500: {
				items: 1,
			},
			767: {
				items: 2,
			},
			991: {
				items: 3,
			},
		},
	});

});


// function openVideoPopup() {
// 	var videoOverlay = document.getElementById("video-overlay");
// 	 videoOverlay.style.display = "block";
// }
  
// function closeVideoPopup() {
// 	var videoOverlay = document.getElementById("video-overlay");
// 	videoOverlay.style.display = "none";
// }
  