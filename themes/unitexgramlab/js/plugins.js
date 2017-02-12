'use strict';
/*
 * @author martinec
 */
// Place any jQuery/helper plugins here

(function($) {
  /*
   * Avoid `console` errors in browsers that lack a console.
   * HTML5 Boilerplate
   * @source https://html5boilerplate.com
   */ 
  $(function() {
      var method;
      var noop = function () {};
      var methods = [
          'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
          'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
          'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
          'timeStamp', 'trace', 'warn'
      ];
      var length = methods.length;
      var console = (window.console = window.console || {});

      while (length--) {
          method = methods[length];

          // Only stub undefined methods.
          if (!console[method]) {
              console[method] = noop;
          }
      }
  }());

  /*
   * formatUnicorn
   * @see http://stackoverflow.com/a/18234317/2042871
   */
  if (!String.prototype.format) {
      String.prototype.format = function() {
          var str = this.toString();
          if (!arguments.length)
              return str;
          var args = typeof arguments[0],
              args = (("string" == args || "number" == args) ? arguments : arguments[0]);
          for (var arg in args)
              str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), args[arg]);
          return str;
      }
  }
  
  /*
   * My Poor Man's Templating engine using a hash object and/or data- attributes
   * as template and context
   *
   * Usage:
   *
   * $(function() {
   *   $('.item').pmTemplate(options);
   * });
   * 
   * example:
   *
   * <a class='item' data-href='http://{key}.org'></a>
   * <a class='item' data-key='foo' data-href='http://{key}.org'></a>
   * 
   * $('.item').pmTemplate({template:'href', context:{key : 'martinec'}});
   *
   * <a class='item' data-href='http://{key}.org' href='http://martinec.org'></a>
   * <a class='item' data-key='foo' data-href='http://{key}.org href='http://foo.org'></a>
   *
   * @param {String} template, the HTML elem for which the template will be evaluated
   * @param {Object} context, a set of key value pairs
   */
  jQuery.fn.extend({
    pmTemplate: function(options) {
      // default options
      var defaults = {
        target: 'attr',
        attr: '',
        template: 'href',
        context: {},
        format: function(settings, text) {
          $(this).attr(settings.attr, text);
        }
      };
      // override default options
      var settings  = $.extend( {}, defaults, options );
      // customize target settings
      switch (settings.target) {
        // if target is 'attr', assign a default value to the attr setting
        case 'attr':
          settings.attr = settings.attr.length ? settings.attr : settings.template;  
          break;
        // if target is 'html', overwrite the default function to set the HTML contents
        case 'html':
          settings.format = function(settings, text) { $(this).html(text); }
          break;          
        // if target is 'text', overwrite the default function to set text content
        case 'text':
          settings.format = function(settings, text) { $(this).text(text); }
          break;
      }
      // loop through the elements
      return this.each(function() {
        // an attribute named data-template must exists
        if($(this).data(settings.template)) {
          // expand the context with the values of the data- attributes
          var oContext = $.extend({}, settings.context, $(this).data());
          // get the template for this item
          var sTemplate = oContext[settings.template];
          // remove the template itself from the context
          delete oContext[settings.template];
          // evaluate the template using the context
          for (var key in oContext) {
            // use the value given with the context
            sTemplate = sTemplate.replace(RegExp("\\{" + key + "\\}", "gi"), oContext[key]);
          }
          // call the format function with the evaluated template
          $.isFunction( settings.format ) && settings.format.call( this, settings, sTemplate );
        }
      });
    }
  });
})(jQuery);  

/*
 * Clipboard.js https://zenorocha.github.io/clipboard.js
 * adapted from grav-theme-learn2
 * @see https://github.com/getgrav/grav-theme-learn2
 *
 * use e.g. clipboardButton.attach('pre code')
 */  
var clipboardButton = (function() {
  var attach = function(elem) {
    var clipInit = false;
    $(elem).each(function () {
      var code = $(this),
      text = code.text();
      if (text.length > 5) {
        if (!clipInit) {
          var text,
          clip = new Clipboard('.copy-to-clipboard', {
            text: function (trigger) {
              text = $(trigger).prev('code').text();
              return text.replace(/^\$\s/gm, '');
            }
          });
          var inPre;
          clip.on('success', function (e) {
            e.clearSelection();
            inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
            $(e.trigger).attr('aria-label', ' Copied! ').addClass('tooltip tooltip-'+ (inPre ? 's' : 'n'));
          });
          clip.on('error', function (e) {
            inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
            $(e.trigger).attr('aria-label', fallbackMessage(e.action)).addClass('tooltip tooltip-'+ (inPre ? 's' : 'n'));
            $(document).one('copy', function () {
              $(e.trigger).attr('aria-label', ' Copied! ').addClass('tooltip tooltip-'+ (inPre ? 's' : 'n'));
            });
          });
          clipInit = true;
        }
        code.after('<span class="copy-to-clipboard" title="Copy to clipboard" />');
        code.next('.copy-to-clipboard').on('mouseleave', function () {
          $(this).attr('aria-label', null).removeClass('tooltip  tooltip-s tooltip-n');
        });
      }
    });
  };
  
  return {
    attach:   attach
  }
})();

/*
 * adapted from  grav-theme-notepad/js/summerb146.js
 * @see https://github.com/getgrav/grav-theme-notepad
 */ 
var autumn = (function ($) {
    var indexPostClass = '.autumn-index-post',
    
    // post animations on homepage
    indexPostAnimate = function () {
        if ($(indexPostClass).length) {
            $(indexPostClass).each(function () {
            var postPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop(),
                windowHeight = $(window).height();
                if (postPos < topOfWindow + (windowHeight/ 1.4)) {
                    $(this).addClass('fadeInDown');
                }
            });
        }
    },
    
    // autumn javascripts initialization
    init = function () {
        indexPostAnimate();
        $(window).on('scroll', function() {
            indexPostAnimate();
        });
        $('p:has(> img)').addClass('with-image');
    };

    return {
        init: init
    };

})(jQuery);
