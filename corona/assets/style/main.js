$(function(){
    "use strict";
    
    
    // Make Background Size As Same As Window Size
    var winh = $(window).height();
    var navh = $(".navbar").height();
    $(".header").height(winh-navh);
    
    
    //Timer Count When Reach To State Section
    
    $(window).scroll(function(){
      var sc = $(this).scrollTop();

      var stattop = $('.states').offset().top;
      if(sc > stattop-50){
        $('.timer').countTo();
        $(window).off('scroll');
      }

    });

    //Show Scroll Button
      $(window).scroll(function(){
        var n = $(this).scrollTop();
        if(n > 400){
          $('.sroll-button i').fadeIn();
        } else{
          $('.sroll-button i').fadeOut();
        }
      });
    
    //Scroll To Top By Button
      $('.sroll-button i').click(function(){
        $('body,html').animate({
          scrollTop :0
        },1000);
      });
    
    
    
    //Scroll to Section
    
     $('.nav-link ').click(function(e){
       
       e.preventDefault();

        $('body,html').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top
        },1000);
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
});

//Spinner Loading When Window Is Loading

    $(window).on('load',function(){
      $('body').css('overflow','auto');
      $('.spinner').fadeOut(2000,function(){
        $(this).parent().fadeOut(3000);
        $(this).remove();
      });

    });


