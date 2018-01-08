/* ==========================================================================
 	Sticky MENU
   ========================================================================== */
   if($('body').hasClass('default')){
   	if($('.stick').length != 0){
	      var stickyNavTop = $('.stick').offset().top;  

	      var stickyNav = function(){
	         var scrollTop = $(window).scrollTop();  

	         if (scrollTop > stickyNavTop) {   
	            $('.stick').addClass('sticky');
               $('.small_logo').removeClass('d_none');
               // $('.small_logo_2').addClass('d_none');
	            $('#header').height(135);
               $('.stick').css('marginTop', '0');
	         } else {  
	            $('.stick').removeClass('sticky'); 
               $('.small_logo').addClass('d_none');
               $('.small_logo_2 img').addClass('d_none');
               $('.stick').css('marginTop', '-50px');
               if($('body').hasClass('home')){
                  $('#header').height(135);
               }else{
                  $('#header').height(135);
               }
	            
	         }  
	      };  

	      stickyNav();  

	      $(window).scroll(function() {  
	         stickyNav();  
	      });
	   }

	   
		$('.navbar-toggle').click(function() {
			var navbarExpended = $('#navbar').attr('aria-expanded');

			if ($('body').hasClass('home')) {				
				if (navbarExpended === 'false') {
					$('.phrase').fadeOut(500);
				} else {
					$('.phrase').fadeIn(500);
				}
			} else {
				if (navbarExpended === 'false') {
					$('#header').css('backgroundPosition', 'center center');
				} else {
					$('#header').css('backgroundPosition', 'center -209px');
				}
			}
		});
   }