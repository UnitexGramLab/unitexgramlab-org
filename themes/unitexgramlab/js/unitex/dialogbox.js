/*
 * DialogBox using FancyBox
 */
'use strict';

(function($) {
  var dialogBox = (function() {
    var $dialog = $('.dialogbox');
    var config  = { 'autoSize': true,
                    'closeBtn': false,
                    'fitToView': true,
                    'margin': 35,
                    'padding': 0,
                    'openEffect': 'fade',
                    'closeEffect': 'fade',
                    'scrolling' : 'no'};

    $('.dialogbox-close').on('click', function() {
       jQuery.fancybox.close();
       return false;
    });

    function init() {
      $dialog.fancybox(config);
    }

    init();

  })();
})(jQuery);
