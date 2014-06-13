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

// Fluid Width Video
var $allVideos = $("iframe[src^='http://www.youtube.com']");
var $fluidEl = $("body");

$allVideos.each(function() {
  $(this)
    .data('aspectRatio', this.height / this.width)
    .removeAttr('height')
    .removeAttr('width');
});

$(window).resize(function() {
  var newWidth = $fluidEl.width();
  $allVideos.each(function() {
    var $el = $(this);
    $el
      .width(newWidth)
      .height(newWidth * $el.data('aspectRatio'));
  });
}).resize();