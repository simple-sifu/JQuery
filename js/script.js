$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  $(".red-box").fadeOut(6000);
  $(".green-box").fadeOut(12000);
  $(".red-box").fadeIn(2000);
  $(".red-box").fadeTo(2000, .2);
  $(".green-box").fadeTo(3000, .4);
  // $(".blue-box").fadeTo(4000, .8);

  $(".green-box").fadeToggle();
  $(".green-box").fadeToggle();
  // $(".blue-box").show();
  // $(".blue-box").hide();
  // $(".blue-box").fadeToggle();
  $(".blue-box").slideUp(2000);
  $(".blue-box").slideDown(2000);

  // test
  $("p").hide();
  $("p").slideDown(8000);


});