'use strict';
// Language language-dropdown switcher for the Unitex/GramLab website theme
// @source http://www.cssscript.com/creating-popup-language-dropdowns-with-javascript-and-css3
(function() {

  var _btns = document.querySelectorAll('.language-toggler'),

    _eachBtn = function(callback) {
      Array.prototype.forEach.call(_btns, function(elem) {
        callback.call(this, elem);
      });
    },
    _initListener = function(e) {
      e.preventDefault();
      e.stopPropagation();
      _eachBtn(function(languageToggler) {
        languageToggler.classList.remove('language-dropdown-open')
      });
      this.classList.toggle('language-dropdown-open');
    },
    _hideAll = function() {
      _eachBtn(function(languageToggler) {
        languageToggler.classList.remove('language-dropdown-open');
      });
    };

  _eachBtn(function(languageToggler) {
    languageToggler.addEventListener('touchend', function(e) {
      _initListener.call(this, e);
    });

    languageToggler.addEventListener('click', function(e) {
      _initListener.call(this, e);
    });

    //languageToggler.addEventListener('mouseover', function(e) {
      //var that = this;
      //setTimeout(function() {
        //_initListener.call(that, e);
      //}, 700);   
    //});    
  });

  document.addEventListener('touchend', function() {
    _hideAll();
  });
  
  document.addEventListener('click', function() {
    _hideAll();
  });

})();
