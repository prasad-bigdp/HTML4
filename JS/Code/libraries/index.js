// libaries are a pre written code used for specific purpose
//JQuery, react, so many
var typed = new Typed("#data", {
	strings: ['','Full stack developer','Enthuaist','Trainer'],
    typeSpeed: 30,
    startDelay:1000,
    loop: true,
    
})


$(document).ready(function ()
{
    $('#para').fadeIn(2000);
})

$(document).ready(function(){
  $(".mydiv").slick({
		infinite: true,
		slidesToShow:3,
      slidesToScroll: 1,
      arrows: true,
      speed: 300,
        dots:true,
	})
});


const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 1000,
    },
    height:200,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
})


