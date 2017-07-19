// Sticky nav bar on scroll past hero
$(document).ready(function() {
  var heroHeight = $("#heroHeader").outerHeight();
      navBar = $("#navBar");
  $(window).scroll(function() {
    if( $(this).scrollTop() > heroHeight ) {
      navBar.addClass("navbar-fixed-top");
    } else {
      navBar.removeClass("navbar-fixed-top");
    }
  });
});


$(document).ready(function() {
  // Home Page- Section 1 logo sizing
    var textHeight = $("#section1Text").outerHeight();
      $("#section1Logo").css("height", textHeight);
  //Project Pages mockup heights (set on page load)
  var laptopHeight = $(".laptopMockup").outerHeight();
    $(".iphoneMockup").css("height", laptopHeight);
  //Project Pages mockup heights (adjust on page resize)
  $(window).resize(function(){
      var laptopHeight = $(".laptopMockup").outerHeight();
        $(".iphoneMockup").css("height", laptopHeight);
  })
});
