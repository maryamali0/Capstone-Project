	/* ---------------------------------------------------------------------- */
	/*	Accordion
	/* ---------------------------------------------------------------------- */

	(function($) {
		"use strict";
	   
		   (function() {
	   
			   var $container = $('.acc-container'),
				   $trigger   = $('.acc-trigger');
	   
			   $container.hide();
			   $trigger.addClass('active').next().show();
	   
			   $("#b1").on("click", function() {
			   $trigger.addClass('active').next().show();
			   })
	   
			   $("#b2").on("click", function() {
				   $trigger.removeClass('active').next().slideUp(300);
				   })
	   
			   var fullWidth = $container.outerWidth(true);
			   $trigger.css('width', fullWidth);
			   $container.css('width', fullWidth);
			   
			   // Slide Picture
			   $trigger.on('click', function(e) {
				   if( $(this).next().is(':hidden') ) {
					   
					   $(this).toggleClass('active').next().slideDown(300);
				   }
				   else{
					   $(this).removeClass('active').next().slideUp(300);
				   }
				   e.preventDefault();
			   });
	   
			   // Resize
			   $(window).on('resize', function() {
				   fullWidth = $container.outerWidth(true)
				   $trigger.css('width', $trigger.parent().width() );
				   $container.css('width', $container.parent().width() );
			   });
	   
		   })();
	   
	   })(jQuery);   