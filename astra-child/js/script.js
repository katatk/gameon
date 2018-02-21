// wordpress loads jquery in no conflicts mode, n ‘no conflict’ mode the $ shortcut is disabled, so you must replace it with the word ‘jQuery’
jQuery(document).ready(function($) {
  // select cards and append 4 spans, one for each corner
  $(".card > .elementor-column-wrap > .elementor-widget-wrap").append("<span class='corner-top-left'></span>");
  $(".card > .elementor-column-wrap > .elementor-widget-wrap").append("<span class='corner-bottom-left'></span>");
  $(".card > .elementor-column-wrap > .elementor-widget-wrap").append("<span class='corner-top-right'></span>");
  $(".card > .elementor-column-wrap> .elementor-widget-wrap").append("<span class='corner-bottom-right'></span>");

});