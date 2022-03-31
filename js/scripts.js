$(document).ready(function() {
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("p").click(function(event) {
    $('p').removeClass();
    $(event.target).addClass("yellow");
  });
});