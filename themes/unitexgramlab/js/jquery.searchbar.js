'use strict';
/*
 * @author martinec
 */
(function($) {
  /*
   * Search Bar
   */
  // namespace to avoid polluting global namespace
  var searchBar = (function() {
    // set options for the control
    var searchBar        = $('.search-bar'),
        searchButton     = $('.search-button'),
        searchButtonIcon = $('.search-button i'),
        searchInput      = $('.search-input'),
        navbarLeft       = $('.navbar-left'),
        navbarRight      = $('.navbar-right'),
        invisibleClass   = 'invisible',
        visibleClass     = 'visible',
        searchIcon       = 'fa-search',
        closeIcon        = 'fa-close',
        tooltipAttribute = 'aria-label',
        searchTag        = searchInput.attr('data-search-tag') ?
                           searchInput.data('search-tag')    : '',        
        closeTag         = searchInput.attr('data-close-tag') ?
                           searchInput.data('close-tag')    : '',        
        minQueryLength   = searchInput.attr('data-min-query-length') ?
                           searchInput.data('min-query-length')    : 3,
        paramSep         = searchInput.attr('data-param-sep') ?
                           searchInput.data('param-sep')    :':';


    var isVisible  = function() {
      return searchBar.hasClass(visibleClass);
    };

    var isInvisible  = function() {
      return searchBar.hasClass(invisibleClass);
    };

    var isEmpty   = function() {
      return searchInput.val().length === 0;
    }

    // hide search bar + show left navbar
    var hideSearchBar   = function() {
      showSearchIcon();
      searchBar.removeClass(visibleClass).addClass(invisibleClass);
      navbarLeft.removeClass(invisibleClass).addClass(visibleClass);
    };

    // show search bar + hide left navbar
    var showSearchBar   = function() {
      searchBar.removeClass(invisibleClass).addClass(visibleClass);            
      navbarLeft.removeClass(visibleClass).addClass(invisibleClass);
      if(searchInput.val().length < minQueryLength) {
        showCloseIcon();
      } else {
        showSearchIcon();
      }
    };
    
    // hide search icon + show closeIcon
    var showCloseIcon   = function() {
      searchButtonIcon.removeClass(searchIcon).addClass(closeIcon);
      searchButton.parent().attr(tooltipAttribute, closeTag);
    };

    // hide closeIcon + show search icon
    var showSearchIcon   = function() {
      searchButtonIcon.removeClass(closeIcon).addClass(searchIcon);
      searchButton.parent().attr(tooltipAttribute, searchTag);
    };    

    var toggleSearchBar = function() {
      // search bar is invisible
      if(isInvisible()) {
        showSearchBar();
      // search bar is visible
      } else {
        hideSearchBar();
      }
    };

    var resize = function() {
      var searchBarSize = navbarRight.offset().left -
                          navbarLeft.offset().left;                    
      if(searchBarSize > 0) {
      var searchBarSizePercent = searchBarSize  /
                                 $(window).width();
        searchBar.css('width', searchBarSize + "px");
        searchBar.css('width', searchBarSizePercent * 100 + "vw");
      }
      return searchBarSize;
    };

    // focus on search input
    var focusSearchBar = function() {
      if(isVisible()) {
        searchInput.focus();
      }
    };

    var search =  function(e) {
      e.preventDefault();
      window.location.href = searchInput.data('search-input')  + paramSep + searchInput.val();
    };

    var toogle = function(e) {
      if(resize()) {
        searchInput.val("");
        toggleSearchBar();
        focusSearchBar();
        e.stopPropagation();
      }      
    };      
    
    var init = function() {
      searchInput.val("");

      // show/hide search bar
      searchButton.click(function(e){
        if(searchInput.val().length < minQueryLength) {
          toogle(e);
        } else {
          search(e);
        }
      });

      // toggle search/close icon if input length is greater than 3 characters
      searchInput.keyup( $.debounce( 250, function(e) {
        // escape key 
        if (e.keyCode == 27 && isVisible()) {
          toogle(e);
        } else {
          if(searchInput.val().length < minQueryLength &&
             searchButtonIcon.hasClass(searchIcon)) {
            showCloseIcon();
          }
          if(searchInput.val().length >= minQueryLength &&
             searchButtonIcon.hasClass(closeIcon)) {
            showSearchIcon();
          }          
        }        
      }));

      // search whether the user has pressed Enter and the input is greater than 3
      searchInput.keypress( $.debounce( 250, function(e) {
        if(e.which == 13 && searchInput.val().length >= minQueryLength) {
          search(e);
        }
      }));

      // detect a click outside an element
      // @source http://stackoverflow.com/a/3028037
      $(document).click(function(e) {
        if(!$(e.target).closest(searchBar).length) {
          if(isVisible()) {
            toogle(e);
          }
        }
      });

      skel
        .on('-small !small', function() {
          if(isEmpty()) {
            searchBar.addClass(invisibleClass);
            showSearchIcon();
          } else {
            showSearchBar();
            focusSearchBar();
          }
          
        })
        .on('+small', function() {
          showSearchIcon();
          navbarLeft.removeClass(invisibleClass).removeClass(visibleClass);
          searchBar.removeClass(visibleClass).removeClass(invisibleClass);          
        });
    };
    
    return {
      init: init
    };
  }()).init();
})(jQuery);
