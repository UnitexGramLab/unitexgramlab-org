/*
 * Download Release
 */
'use strict';

const RELEASE_OS_BITS   = typeof Detectizr.os.addressRegisterSize != 'undefined' ?
                          Detectizr.os.addressRegisterSize == "64bit"            ?
                          "64" : "32" : "64";
const RELEASE_OS_NAME   = typeof Detectizr.os.name != 'undefined' ?
                          Detectizr.os.name == "mac os"  ? "osx"           :
                          Detectizr.os.name == "windows" ? "win"           :
                          Detectizr.os.name == "linux"   ? "linux"         :
                          Detectizr.os.name : "other";
const RELEASE_OS_CLASS  = typeof Detectizr.os.name != 'undefined' ?
                          Detectizr.os.name == "mac os"  ? "osx"           :
                          Detectizr.os.name == "windows" ? "win"           :
                          Detectizr.os.name == "linux"   ? "linux"         :
                          "other" : "other";
const RELEASE_OS_LABEL  = RELEASE_OS_NAME == "osx"   ? "OS X"              :
                          RELEASE_OS_NAME == "win"   ? "Windows"           :
                          RELEASE_OS_NAME == "linux" ? "Linux"             :
                          RELEASE_OS_NAME == "other" ? "other platforms"   :
                          RELEASE_OS_NAME;
const RELEASE_OS_ARCH   = RELEASE_OS_NAME == "osx"   ? "osx"               :
                          RELEASE_OS_NAME == "win"   ?
                          RELEASE_OS_BITS == "64"    ? "win64"             : "win32"      :
                          RELEASE_OS_NAME == "linux" ?
                          RELEASE_OS_BITS == "64"    ? "linux-x86_64"      : "linux-i686" :
                          "source";
const RELEASE_FILE_SFX  = RELEASE_OS_NAME == "osx"   ? "-osx.run"          :
                          RELEASE_OS_NAME == "win"   ?
                          RELEASE_OS_BITS == "64"    ? "_win64-setup.exe"  : "_win32-setup.exe" :
                          RELEASE_OS_NAME == "linux" ?
                          RELEASE_OS_BITS == "64"    ? "-linux-x86_64.run" : "-linux-i686.run"  :
                          "-source-distribution.zip";
const RELEASE_OS_ICON   = RELEASE_OS_NAME == "osx"   ? "fa-apple"          :
                          RELEASE_OS_NAME == "win"   ? "fa-windows"        :
                          RELEASE_OS_NAME == "linux" ? "fa-linux"          :
                          "fa-file-archive-o";
const RELEASE_OS_CHAR   = RELEASE_OS_NAME == "osx"   ? "\uf179"            :
                          RELEASE_OS_NAME == "win"   ? "\uf17a"            :
                          RELEASE_OS_NAME == "linux" ? "\uf17c"            :
                          "\uf1c6";

(function($) {
  var releaseLink = (function() {

    function init() {
      // show '.os-win', '.os-linux', '.os-osx', '.os-other'
      showClass('.os-' + RELEASE_OS_CLASS);
      // show '.os-32', '.os-64'
      showClass('.os-' + RELEASE_OS_BITS);
      // for '.os-text', use template in data-text to update element content
      updateText('.os-text');
      // for '.download-release-link', use template in data-href to update href
      updateLink('.download-release-link');
      // for '.os-icon', assign RELEASE_OS_CHAR to the data-icon attribute
      updateDataIcon('.os-icon', RELEASE_OS_CHAR);
      // add the detected os icon to a specific element class
      updateClassIcon('#main-setup-download-button', RELEASE_OS_ICON);
      // add the detected os as a specific element class
      updateClassOsName('#main-setup-download-button',RELEASE_OS_NAME);
      // attach install instructions
      attachInstallInstructions('.install-instructions');
    }
    
    function showClass(selector) {
      $(selector).removeClass('hidden js-hidden').show();
    }
          
    function updateText(selector) {
      var version_stable = typeof RELEASE_STABLE !== 'undefined'  ? RELEASE_STABLE : '?',
          version_devel  = typeof RELEASE_DEVEL  !== 'undefined'  ? RELEASE_DEVEL  : '?';
      $(selector).pmTemplate({target:'text', template:'text',
                              context: {arch    : RELEASE_OS_ARCH,
                                        suffix  : RELEASE_FILE_SFX,
                                        oslabel : RELEASE_OS_LABEL,
                                        osbits  : RELEASE_OS_BITS,
                                        stable  : version_stable,
                                        devel   : version_devel}});
    }

    function updateLink(selector) {
      $(selector).pmTemplate({template: 'href',
                              context: {arch    : RELEASE_OS_ARCH,
                                        suffix : RELEASE_FILE_SFX}})
                 .pmTemplate({template: 'title',
                              context: {oslabel : RELEASE_OS_LABEL}});
    }    

    function updateDataIcon(selector, icon) {
      $(selector).attr('data-icon', icon);
    }

    function updateClassIcon(selector, icon) {
      $(selector).removeClass('fa-apple fa-windows fa-linux fa-file-archive-o').addClass(icon);
    }

    function updateClassOsName(selector, osName) {
      $(selector).removeClass('osx win linux other').addClass(osName);
    }
    
    function attachInstallInstructions(selector) {
      // show a modal dialog with the install instructions
      $(selector).on('click', function (event) {
        var $this = $(this);
        var url = $('#language-current').attr('hreflang') + '/home/install-instructions';
        $.fancybox(
            { 'href': url,
              'dataType' : 'html',
              'headers'  : '{ "X-fancyBox": true }',
              'type' : 'ajax',
              'autoSize': false,
              'closeBtn': false,
              'fitToView': true,
              'margin': 35,
              'minWidth': 200,
              'maxWidth': 800,
              'minHeight': 550,
              'maxHeight': 600,
              'padding': 0,
              'openEffect': 'fade',
              'closeEffect': 'fade',
              'scrolling' : 'no',
              'beforeLoad' : function() {
                window.location.assign($this.attr('href'));
              },
              'beforeShow' : function() {
                $('.dialogbox-close').on('click', function() {
                   jQuery.fancybox.close();
                   return false;
                });
                var osclass = $this.data('release-os-class') ? $this.data('release-os-class') : RELEASE_OS_CLASS,
                    oschar  = $this.data('release-os-char')  ? $this.data('release-os-char')  : RELEASE_OS_CHAR;
                updateDataIcon('#install-instructions .os-icon', oschar);
                showClass('#install-instructions .os-' + osclass);
                updateText('#install-instructions .os-text');
                // add Clipboard icon
                clipboardButton.attach('pre code');
              }
            }
        );
        // equal to preventDefault() + stopPropagation();
        return false;
      });
    }

    init();

  })();
})(jQuery);
