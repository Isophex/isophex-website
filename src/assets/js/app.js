import $ from 'jquery';
import Typed from 'typed.js';
import Vivus from 'vivus';

window.$ = $;

$(document).ready(function(){
    console.log("Document is ready");
    $(".hamburger-wrapper").click(function(){
        $(this).toggleClass('open');
        $(".site-nav").toggleClass('open');
        $("body").toggleClass("no-scroll");
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 80,
              
            }, 500, function(){
                $(".hamburger-wrapper").removeClass('open');
                $(".site-nav").removeClass('open');
                $("body").removeClass("no-scroll");
            });
            return false;
          }
        }
    });

    var typed = new Typed('.type-here', {
        stringsElement: '#typed-strings',
        cursorChar: ' |',
        loop: false,
        typeSpeed: 200,
        backSpeed: 0,
        fadeOut: true,
        onComplete: function(self) { 
            $(".typed-cursor").css({
                "animation-iteration-count": "initial",
            });
        },
    });

    new Vivus('twisty-graphic', {duration: 200});
    new Vivus('ecommerce-graphic', {duration: 200});
    new Vivus('blog-graphic', {duration: 150});

    // var $heliosContainer = $(".helios-case .left");
    // var $heliosImg = $(".helios-case .image-wrapper");

    // $heliosContainer.mouseenter(function(){
    //     $heliosImg.addClass("upper");
    // });

});
