/* Text animation */
var typed= new Typed('.typing',{
         strings:["I'm Font-End Web Developer", "I'm Creative Designser","E-commerce Site Design","PSD TO HTML Template"],
         loop:true,
         typeSpeed:50,
         backSpeed:50,
         backDelay:1000,
    });

/*Navigation bar */
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100){  
        $('.sticky').addClass("fixed");
    }
    else{
        $('.sticky').removeClass("fixed");
    }
  });
 
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100){  
        $('.nav-link').addClass("nav-link-2");
    }
    else{
        $('.nav-link').removeClass("nav-link-2");
    }
  }); 

  $(window).scroll(function() {
      if ($(this).scrollTop() > 100){  
        $('.navbar-brand').addClass("navbar-brand-2");
    }
    else{
        $('.navbar-brand').removeClass("navbar-brand-2");
    }
  });
 /*text part**/
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100){  
        $('.home-item-text').addClass("home-item-text-2");
    }
    else{
        $('.home-item-text').removeClass("home-item-text-2");
    }
  }); 

  ///about section progress bar///
  $(window).scroll(function() {
      if ($(this).scrollTop() > 600){  
        $('.progress-bar').addClass("progress-bar-animation");
    }
    else{
        $('.progress-bar').removeClass("progress-bar-animation");
    }
  }); 


  /// project animation scroll time ///
  	AOS.init({
            easing: 'ease-out-back',
            duration: 1000
        });

  	////scoll //

  $(document).ready(function () {

 	// script for smooth scrolling //
 	jQuery(document).ready(function ($) {
 		$(".scroll ").click(function (event) {
 			event.preventDefault();

 			$('html,body').animate({
 				scrollTop: $(this.hash).offset().top
 			}, 900);
 		});
 	});


 });