$(document).ready(function(){

window.addEventListener('load', AOS.refresh)
	AOS.init();


	$('.images-collection').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  arrows: false,
	  adaptiveHeight: false
	});

	$('.partner-image-wrapper').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  arrows:false,
	  slidesToShow: 5,
	  slidesToScroll: 4,
	  autoplay: true,
  	  autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: false,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        dots: false,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        dots: false,
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});