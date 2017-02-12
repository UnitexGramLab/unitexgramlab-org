/*
	Fractal by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  // Setup the CSS breakpoints accessible via Skel.js
  // should mirror those found in our sass/main.scss
	skel.breakpoints({
		xlarge:		'(max-width: 1680px)',
		large:		'(max-width: 1280px)',
		medium:		'(max-width: 980px)',
		small:		'(max-width: 736px)',
		xsmall:		'(max-width: 480px)',
		xxsmall:	'(max-width: 360px)'
	});

  // automatically generate conditional classes that hide/show
  // elements based on whether a particular breakpoint is active
  // or inactive, Skel will generate the following classes:
  // only-breakpoint (e.g only-xlarge) and not-breakpoint (e.g
  // not-xlarge)
  skel.conditionals ({
    enabled: true
  });

	$(function() {
		var	$window = $(window),
    $body = $('body');

		// Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
      window.setTimeout(function() {
        $body.removeClass('is-loading');
      }, 100);
    });

		// add is-mobile body class when 
    if (skel.vars.mobile) {
      $body.addClass('is-mobile');
    }  
    else {
      skel
        .on('-medium !medium', function() {
          $body.removeClass('is-mobile');
        })
        .on('+medium', function() {
          $body.addClass('is-mobile');
        });
    }    

		// Fix: Placeholder polyfill
    // apply "placeholder" attribute polyfill to one or more forms
    $('form').placeholder();

		// Prioritize "important" elements on medium
    skel.on('+medium -medium', function() {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      );
    });
	});

})(jQuery);
