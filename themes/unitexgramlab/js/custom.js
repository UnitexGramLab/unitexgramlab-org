'use strict';
/*
 * @author martinec
 */
(function($) {
  /*
   * add a copy-to-clipboard button to 'pre code' elements
   */
  clipboardButton.attach('pre code');
  
  /*
   * add tooltip in elements of the truncated class when ellipsis is active
   */
  $('.truncate-items').children().each(function() {
    var $this = $(this);
    if(this.offsetWidth < this.scrollWidth && !$this.attr('aria-label')){
       $this.attr('aria-label',$this.text()).addClass('tooltip tooltip-multiline tooltip-s');
    }
  });

  /*
   * backtotop scroll fade
   * show or hide the back-to-top button
   */
  $(window).scroll($.debounce(250, function() {
    if ($(this).scrollTop() > 300) {
        $('#backtotop').fadeIn();
    } else {
        $('#backtotop').fadeOut();
    }
  }));

  /*
   * highlights carrousel
   */
  $('.highlights-carousel').slick({
    dots: true,
    arrows: false,
    focusOnSelect: false,
    infinite: true,
    autoplay: false,
    speed: 0,
    fade: true,
    adaptiveHeight: false,
    cssEase: 'linear',
    responsive: [{
      // same as skel.breakpoint("small")
      breakpoint: 736,
      settings: {
        adaptiveHeight: true
      }
    }]
  });

  /*
   * screenshots carousel
   */
  $('.screenshots-carousel').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    fade: true,
    focusOnSelect: false,
    draggable: false,
    adaptiveHeight: false,
    //centerMode: true,
    //variableWidth: true,    
    cssEase: 'linear',
    responsive: [{
      // same as skel.breakpoint("small")
      breakpoint: 736,
      settings: {
        arrows: false,
      }
    }]
  });

  /*
   * download carrousel
   */
  // namespace to avoid polluting global namespace
  var downloadCarousel = (function() {
    // set options for the control
    var carousel      = $('.download-carousel'),
        stable        = $('#icon-version-stable'),
        stableIcon    = $('#icon-version-stable i'),
        devel         = $('#icon-version-devel'),
        develIcon     = $('#icon-version-devel i'),
        selectedClass = 'selected',
        hideClass     = 'tooltip-hide',
        stableIndex   = 0,
        develIndex    = 1;

    // buttons
    var buttons       = [
      {selector : $('#icon-version-stable'), icon: $('#icon-version-stable i')},
      {selector : $('#icon-version-devel'),  icon: $('#icon-version-devel i')}
    ];

    // change the icon
    var selectIcon = function(slide) {
      var current  = slide == stableIndex ? stableIndex : develIndex,
          previous = slide == stableIndex ? develIndex  : stableIndex;
      buttons[current].selector.addClass(hideClass);
      buttons[previous].selector.removeClass(hideClass);
      buttons[current].icon.addClass(selectedClass);
      buttons[previous].icon.removeClass(selectedClass);
    };

    // change the slide and hence the icon associated
    var select = function(slide) {
      if( carousel.slick('slickCurrentSlide') != slide ) {
        carousel.slick('slickGoTo', slide);
      }
    };
    
    var init = function() {
      // slick carousel 
      carousel.slick({
        dots: false,
        arrows: false,
        focusOnSelect: false,
        draggable: false,
        infinite: true,
        autoplay: false,
        speed: 800,
        fade: true,
        easing: 'ease',
        cssEase: 'ease-out'
      }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        selectIcon(nextSlide);
      });

      // stable button click event
      buttons[stableIndex].selector.on('click', function () {
        select(stableIndex);
      });

      // devel button click event
      buttons[develIndex].selector.on('click', function () {
        select(develIndex);
      });
    };
    
    return {
      init:   init,
      select: select
    };
  }()).init();

  /*
   * download highlight on hover
   */
  //$('#downloads').hover(
    //function() {
      //$(this).addClass('style4').removeClass('style1');
    //}, function() {
      //$(this).addClass('style1').removeClass('style4');
    //}
  //);

  /*
   * my 700-bytes tagline animation
   */
	$(function() {
		var	$window   = $(window),
        $element  = $('#unitexgramalab-tagline');
    if($element && $element.data('ticker')) {
      var features  = $element.data('ticker').split(","),
          length    = features.length;
      $window.on('load', function() {
        $element.on('click', function() {
          var current =  $('#unitexgramalab-tagline').text();
          features.splice( $.inArray(current, features), 1 );
          var feature =  features[Math.floor(Math.random()*(length-1))];
          $element.fadeOut("slow", function () {
              $element.text(feature);
          });
          $element.fadeIn("slow");
          features.push(current);
        }).css( 'cursor', 'pointer' );
      });
    }
	});

  /*
   * Responsive equal height columns for download descriptions
   * using jquery.matchHeight.js
   */
   $('.download-description').matchHeight();

  /*
   * Launch survey on lightbox
   */
  $("a#survey").fancybox({
    'width'				  : '90%',
    'height'			  : '90%',
    'autoScale'     : false,
    'transitionIn'	: 'none',
    'transitionOut' : 'none',
    'type'				  : 'iframe',
    'closeBtn'      : false,
    'padding'       : 0,
  });   

  /*
   * Active jQuery Accordion on single-open-fisarmonica elements
   */
  $('.single-open-fisarmonica [data-fisarmonica]').fisarmonica({
    transitionSpeed: 400,
    singleOpen: false
  });

  $(window).on('load', function() {
    window.setTimeout(function() { 
    console.log([
      " _   _       _ _                ______                     _          _     ",
      "| | | |_ __ (_) |_ _____  __   / / ___|_ __ __ _ _ __ ___ | |    __ _| |__  ",
      "| | | | '_ \\| | __/ _ \\ \\/ /  / / |  _| '__/ _` | '_ ` _ \\| |   / _` | '_ \\ ",
      "| |_| | | | | | ||  __/>  <  / /| |_| | | | (_| | | | | | | |__| (_| | |_) |",
      " \\___/|_| |_|_|\\__\\___/_/\\_\\/_/  \\____|_|  \\__,_|_| |_| |_|_____\\__,_|_.__/ ",
      "",
      "Get the sources at github.com/unitexgramlab/unitexgramlab-org",
      "Email us at devel at unitexgramlab.org"
    ].join("\n"));        
    }, 100);
  });
})(jQuery);


//// hide anything that should be hidden
//$(".hidden").hide();
