
$(document).ready(function () {
    var windowWidth = $(window).width();
    
  if ($(window).width() < 1050) {
    $(".js-numbered-list-content").slideUp("fast");
    $(".js-numbered-list-container").addClass("dropdown-arrow");
  }

  $(".js-numbered-list-container").click(function () {

    if ($(window).width() < 1050) {
      $(this).toggleClass("expanded");
      $(this).next().slideToggle("slow");
    }
  });

  $(window).resize(function () {
      if ($(window).width() != windowWidth) {
          windowWidth = $(window).width();
          if ($(window).width() < 1050) {
              $(".js-numbered-list-content").slideUp();
              $(".js-numbered-list-container").removeClass("expanded");
              $(".js-numbered-list-container").addClass("dropdown-arrow");
          } else {
              $(".js-numbered-list-content").slideDown();
              $(".js-numbered-list-container").removeClass("dropdown-arrow");
          }
      }
 });

}());
