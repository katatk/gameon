// wordpress loads jquery in no conflicts mode, n ‘no conflict’ mode the $ shortcut is disabled, so you must replace it with the word ‘jQuery’
jQuery(document).ready(function($) {
  // select cards and append 4 spans, one for each corner
  $(".card > .elementor-column-wrap > .elementor-widget-wrap").append("<span class='corner-top-left'></span>");
  $(".card > .elementor-column-wrap > .elementor-widget-wrap").append("<span class='corner-bottom-left'></span>");
  $(".card > .elementor-column-wrap > .elementor-widget-wrap").append("<span class='corner-top-right'></span>");
  $(".card > .elementor-column-wrap> .elementor-widget-wrap").append("<span class='corner-bottom-right'></span>");

  // scroll to top function
  // show button when more than 50px from top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').addClass('visible');
    } else {
      $('#back-to-top').removeClass('visible');
    }
  });

  $('#back-to-top').click(function() {
    // first parameter is the property to be animated
    // second is duration in milliseconds
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });

  // add star background to entry-content
  $('.entry-content').addClass("star-bg");

  // for sliders, calculate height of background image
  var getBackgroundImageSize = function(el) {
    var imageUrl = $(el).css('background-image').match(/^url\(["']?(.+?)["']?\)$/);
    var dfd = new $.Deferred();

    if (imageUrl) {
      var image = new Image();
      image.onload = dfd.resolve;
      image.onerror = dfd.reject;
      image.src = imageUrl[1];
    } else {
      dfd.reject();
    }

    return dfd.then(function() {
      return {
        width: this.width,
        height: this.height
      };
    });
  };

  //
  // Usage
  //
  getBackgroundImageSize(jQuery('#mydiv'))
    .then(function(size) {
      console.log('Image size is', size.width, size.height);
    })
    .fail(function() {
      console.log('Could not get size because could not load image');
    });


});