/*!
    * Start Bootstrap - Creative v6.0.0 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
  (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



  // Magnific popup calls
  $('#tips').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


$(document).ready(function() {

 
    $(".myBtn").click(function(){

       if($(this).text()=="المزيد"){
        $(this).prev().fadeIn(100, function(){
         $(this).next().text("إخفاء");
        });
      }

      if($(this).text()=="إخفاء"){
        $(this).prev().fadeOut(100, function(){
         $(this).next().text("المزيد");
        });
      }
        
    });
	
	// Start Chnage Nav
	
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-shadow');
			$('.navbar-expand-lg').removeClass('bg-primary');
		} else {
			$('.navbar-expand-lg').addClass('bg-primary');
			$('.navbar-expand-lg').removeClass('navbar-shadow');
		}
	});
	
	// Start scroll To Top

    var scrollToTop = $('.scroll-to-top');
    $(window).on('scroll', function () 
                 {
        if ($(window).scrollTop() >= 500) {
            if (! scrollToTop.is(':visible')) {
                scrollToTop.fadeIn(600);
            }
        } else {
            if (scrollToTop.is(':visible')) {
                scrollToTop.fadeOut(600);
            }
        }
    });
    $('.scroll-to-top a').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });
});