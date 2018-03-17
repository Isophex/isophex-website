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

    // $('a[href*="#"]:not([href="#"])').click(function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html, body').animate({
    //                 scrollTop: target.offset().top - 80,

    //             }, 500, function () {
    //                 $(".hamburger-wrapper").removeClass('open');
    //                 $(".site-nav").removeClass('open');
    //                 $("body").removeClass("no-scroll");
    //             });
    //             return false;
    //         }
    //     }
    // });

    // var $root = $('html, body');

    // $('a[href*="#"]:not([href="#"])').click(function (event) {

    //     var href = $.attr(this, 'href');

    //     // On-page links
    //     if (
    //         location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    //         &&
    //         location.hostname == this.hostname
    //     ) {
    //         // Figure out element to scroll to
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         // Does a scroll target exist?
    //         if (target.length) {
    //             // Only prevent default if animation is actually gonna happen
    //             event.preventDefault();
    //             $root.animate({
    //                 scrollTop: target.offset().top - 80,
    //             }, 500, function () {
    //                 // Callback after animation
    //                 // Must change focus!
    //                 // var $target = $(target);
    //                 // $target.focus();
    //                 // if ($target.is(":focus")) { // Checking if the target was focused
    //                 //     return false;
    //                 // } else {
    //                 //     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //                 //     $target.focus(); // Set focus again
    //                 // };
    //                 window.location.hash = href;
    //                 $(".hamburger-wrapper").removeClass('open');
    //                 $(".site-nav").removeClass('open');
    //                 $("body").removeClass("no-scroll");
    //             });
    //         }
    //     }
    // });

    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        var href = $.attr(this, 'href');

        $root.animate({
            scrollTop: $(href).offset().top - 80
        }, 500, function () {
            window.location.hash = href;
            $(".hamburger-wrapper").removeClass('open');
            $(".site-nav").removeClass('open');
            $("body").removeClass("no-scroll");
            
        });

        return false;
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
