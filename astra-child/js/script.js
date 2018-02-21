$(document).ready(function() {

  // select cards and append 4 spans, one for each corner
  $(".card").append("<span class='corner-top-left'></span>");
  $(".card").append("<span class='corner-bottom-left'></span>");
  $(".card").append("<span class='corner-top-right'></span>");
  $(".card").append("<span class='corner-bottom-right'></span>");

});