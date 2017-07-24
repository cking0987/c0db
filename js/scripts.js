//
///
/// Sticky nav bar on scroll past hero
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

//
///
/// Project pages sizing functions
$(document).ready(function() {
  //Project Pages mockup heights (set on page load)
    var laptopHeight = $(".laptopMockup").outerHeight();
    $(".iphoneMockup").css("height", laptopHeight);
  //Project Pages mockup heights (adjust on page resize)
  $(window).resize(function(){
      var laptopHeight = $(".laptopMockup").outerHeight();
        $(".iphoneMockup").css("height", laptopHeight);
  })
});

//
///
///smooth scrolling
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
