import $ from 'jquery';
import Typed from 'typed.js';
import Vivus from 'vivus';

window.$ = $;


$(document).ready(function () {
    console.log("Document is ready");



    var $body = $("body");
    var $hamburger = $(".hamburger-wrapper");
    var $nav = $(".site-nav");
    var $infoIconWrapper = $(".site-header .icon-wrapper");
    var $infoIcon = $(".information-icon");
    var $modal = $(".info-modal");
    var $modalOverlay = $(".info-modal .overlay");
    var $closeModal = $(".close-button-wrapper");
    var $modlaContent = $(".modal-content");

    $hamburger.click(function () {
        $(this).toggleClass('open');
        $nav.toggleClass('open');
        $body.toggleClass("no-scroll");
    });

    $infoIconWrapper.click(function () {
        $hamburger.attr("class", "hamburger-wrapper");
        $nav.attr("class", "site-nav");
        $infoIcon.toggleClass("open");
        $modal.toggleClass("open");
        $modlaContent.toggleClass("open")
        $body.toggleClass("no-scroll");
    });

    $closeModal.click(function () {
        $modal.toggleClass("open");
        $body.toggleClass("no-scroll");
        $infoIcon.toggleClass("open");
        $modlaContent.toggleClass("open")
    });

    $modalOverlay.click(function(){
        $infoIcon.toggleClass("open");
        $modal.toggleClass("open");
        $body.toggleClass("no-scroll");
        $modlaContent.toggleClass("open")
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

    //used to determine if scrolling up or down
    var lastScrollTop = 0;

    //header bar height
    var headerHeight = 80;

    //plugin for determining if in viewport
    $.fn.isInViewport = function () {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && (elementTop + 300) < viewportBottom;
    };

    var $heliosTarget = $(".helios .image-wrapper");
    var $heliosImg = $(".helios .image-wrapper img");
    var $inclineTarget = $(".incline .image-wrapper");
    var $inclineImg = $(".incline .image-wrapper img");
    var $chinahubTarget = $(".chinahub .image-wrapper");
    var $chinahubImg = $(".chinahub .image-wrapper img");

    $(window).on("resize scroll", function () {

        if ($(this).width() > 992) {
            imageScroller($heliosTarget, $heliosImg);
            imageScroller($inclineTarget, $inclineImg);
            imageScroller($chinahubTarget, $chinahubImg);
        }



    });

    function imageScroller(target, img) {

        var st = $(window).scrollTop();

        if (target.isInViewport()) {

            //if scrolling down
            if (st >= lastScrollTop) {


                img.animate({ top: "-=10" }, 10, function () {

                    if ($(this).css('top') <= "0") {
                        $(this).css({ top: "0" });
                    }

                });

            } else {

                //scrolling up
                img.animate({ top: "+=10" }, 10, function () {

                    if ($(this).position().top >= 100) {
                        $(this).css({ top: "100px" });
                    }

                });

            }

            //resets scroller var
            lastScrollTop = st;

        } else {

            img.css({ top: "100px" });
        }





    }


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

});
