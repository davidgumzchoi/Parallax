// Parallax Scrolling
$(document).ready(function(){
    $objWindow = $(window);
    $('div[data-type="background"]').each(function(){
        var $bgObj = $(this);
        $(window).scroll(function() {
            var yPos = -($objWindow.scrollTop() / $bgObj.data('speed')); 
            var coords = '100% '+ yPos + 'px';
            // Animate the background
             $bgObj.css({backgroundPosition:coords});
        });
    });
});

// Smooth Scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});