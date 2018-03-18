import $ from 'jquery';
import Typed from 'typed.js';
import Vivus from 'vivus';

window.$ = $;

$(document).ready(function () {
    console.log("Document is ready");
    $(".hamburger-wrapper").click(function () {
        $(this).toggleClass('open');
        $(".site-nav").toggleClass('open');
        $("body").toggleClass("no-scroll");
    });


    var $root = $('html, body');

    $('a[href^="#"]').click(function (e) {
        e.preventDefault();

        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top - 80
        }, 500, function () {

            window.location.hash = href;

            //fixes jumping and not taking offset into account
            $root.animate({
                'scrollTop': $(href).offset().top - 80
            }, 0);

            $(".hamburger-wrapper").removeClass('open');
            $(".site-nav").removeClass('open');
            $("body").removeClass("no-scroll");


        });

        return false;
    });

    // $.fn.isInViewport = function () {
    //     var elementTop = $(this).offset().top;
    //     var elementBottom = elementTop + $(this).outerHeight();

    //     var viewportTop = $(window).scrollTop();
    //     var viewportBottom = viewportTop + $(window).height();

    //     return elementBottom > viewportTop && elementTop < viewportBottom;
    // };


    var scrollAmount = 100;
    var lastScrollTop = 0, delta = 1;
    var scrollingDown = true;

    var $helios = $(".helios .image-wrapper img");

    $(window).on('resize scroll', function () {

        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        if (st > lastScrollTop) {
            // downscroll code
            
            scrollingDown = true;
            console.log(scrollingDown);

        } else {
            // upscroll code
            
            scrollingDown = false;
            console.log(scrollingDown);
        }
        lastScrollTop = st;



        var top_of_Helios = $(".helios").offset().top;
        var bottom_of_Helios = $(".helios").offset().top + $(".helios").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
        var top_of_screen = $(window).scrollTop();
    
        if((bottom_of_screen > top_of_Helios) && (top_of_screen < bottom_of_Helios)){
            if(scrollingDown){
                if(scrollAmount >= 0) {
                    $helios.css({
                        transform: "translateY(" + (scrollAmount -= 2) + "px)",
                       });
                }
                
            } else {
                if(scrollAmount <= 100) {
                $helios.css({
                    transform: "translateY(" + (scrollAmount += 2) + "px)",
                   });
                }
            }
           
        }
        else {
            $helios.css({
                transform: "translateY(100px)",
            });
            scrollAmount = 100;
            
        }
        
        // scrollAmount++;
    });

    var typed = new Typed('.type-here', {
        stringsElement: '#typed-strings',
        cursorChar: ' |',
        loop: false,
        typeSpeed: 200,
        backSpeed: 0,
        fadeOut: true,
        onComplete: function (self) {
            $(".typed-cursor").css({
                "animation-iteration-count": "initial",
            });
        },
    });

    new Vivus('twisty-graphic', { duration: 200 });
    new Vivus('ecommerce-graphic', { duration: 200 });
    new Vivus('blog-graphic', { duration: 150 });

    // var $heliosContainer = $(".helios-case .left");
    // var $heliosImg = $(".helios-case .image-wrapper");

    // $heliosContainer.mouseenter(function(){
    //     $heliosImg.addClass("upper");
    // });

});
