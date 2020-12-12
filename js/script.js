$(function() {
  // attr(), prop(), val()
  var specialLink = $("#special-link");
  console.log(specialLink.attr("href"));
  console.log(specialLink.attr("title"));
  specialLink.attr("href", "http://yahoo.com");
  specialLink.attr("href", "http://yahoo.com");
});