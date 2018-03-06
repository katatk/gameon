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
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
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


});