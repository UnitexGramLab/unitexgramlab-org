/*
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
// rewritten by martinec
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor   = $(this);
    var $duration = 1500;
    var $easing   = 'easeInOutExpo';
    var $top      = 0;
    if ( $anchor.length ) {
      if($anchor.attr('href') !== "#") {
        if( $($anchor.attr('href')).length ) {
          if ( $('.navbar-fixed-top').length ) {
            $top = $($anchor.attr('href')).offset().top -
                   $('.navbar-fixed-top').height() + 2;
          } else {
            $top = $($anchor.attr('href')).offset().top;
          }
        }
      }  

      // scroll
      $('html, body').stop().animate({
        scrollTop: $top
      }, $duration, $easing);
    }
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    // modified by martinec
    offset: $('.navbar-fixed-top').height()
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});
