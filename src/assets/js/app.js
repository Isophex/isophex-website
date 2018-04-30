import $ from 'jquery';
import lazySizes from 'lazysizes';
import Typed from 'typed.js';
import Vivus from 'vivus';


window.jQuery = $;



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
        // $body.toggleClass("no-scroll");


        $infoIcon.removeClass("open");
        $modal.removeClass("open");
        $modlaContent.removeClass("open");

    });

    $infoIconWrapper.click(function () {
        $hamburger.removeClass("open");
        $nav.removeClass("open");
        $infoIcon.toggleClass("open");
        $modal.toggleClass("open");
        $modlaContent.toggleClass("open");


    });

    $closeModal.click(function () {
        $modal.toggleClass("open");
        $body.removeClass("no-scroll");
        $infoIcon.toggleClass("open");
        $modlaContent.toggleClass("open");
    });

    $modalOverlay.click(function () {
        $infoIcon.toggleClass("open");
        $modal.toggleClass("open");
        $body.removeClass("no-scroll");

        $modlaContent.toggleClass("open");
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
    function isInViewport(elem) {
        var elementTop = $(elem).offset().top;
        var elementBottom = elementTop + $(elem).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && (elementTop + 300) < viewportBottom;
    };

    // $.fn.isOnTop = function() {
    //     var elementTop = $(this).offset().top;
    //     var viewportTop = $(window).scrollTop();
    //     return elementTop > viewportTop;
    // }

    var $heliosTarget = $(".helios .image-wrapper");
    var $heliosImg = $(".helios .image-wrapper img");
    var $inclineTarget = $(".incline .image-wrapper");
    var $inclineImg = $(".incline .image-wrapper img");
    var $chinahubTarget = $(".chinahub .image-wrapper");
    var $chinahubImg = $(".chinahub .image-wrapper img");
    var $suviTarget = $(".suvi .image-wrapper");
    var $suviImg = $(".suvi .image-wrapper img");

    var currentHash = "#";
    var anchorArr = $('.anchor');

    $(window).on("resize scroll", function () {


        var currentTop = window.pageYOffset / 1;



        //manual url change
        anchorArr.each(function () {
            var currentElementTop = $(this).offset().top;
            var hash = $(this).attr('id');

            if (currentElementTop - 80 < currentTop && currentTop < currentElementTop - 80 + $(this).height() && currentHash != hash) {

                if (history.pushState) {
                    history.pushState(null, null, '#' + hash);
                }

                else {
                    location.hash = '#' + hash;
                }

                currentHash = hash;
            }
        });

        //product image scrolling 
        if ($(this).width() > 992) {
            var st = $(window).scrollTop();

            //if image is in viewport
            if (isInViewport($suviTarget)) {

                //if scrolling down
                if (st >= lastScrollTop) {


                    $suviImg.animate({ top: "-=5" }, 5, function () {

                        if ($(this).css('top') <= "75") {
                            $(this).css({ top: "75px" });
                        }

                    });

                } else {

                    //scrolling up
                    $suviImg.animate({ top: "+=5" }, 5, function () {

                        if ($(this).position().top >= 100) {
                            $(this).css({ top: "100px" });
                        }

                    });

                }

                //resets scroller var
                lastScrollTop = st;

            } 
            else if (isInViewport($heliosTarget)) {

                $suviImg.css({ top: "100px" });

                //if scrolling down
                if (st >= lastScrollTop) {


                    $heliosImg.animate({ top: "-=5" }, 5, function () {

                        if ($(this).css('top') <= "0") {
                            $(this).css({ top: "0" });
                        }

                    });

                } else {

                    //scrolling up
                    $heliosImg.animate({ top: "+=5" }, 5, function () {

                        if ($(this).position().top >= 100) {
                            $(this).css({ top: "100px" });
                        }

                    });

                }

                //resets scroller var
                lastScrollTop = st;

            } else if (isInViewport($inclineTarget)) {
                $heliosImg.css({ top: "100px" });

                 //if scrolling down
                 if (st >= lastScrollTop) {


                    $inclineImg.animate({ top: "-=5" }, 5, function () {

                        if ($(this).css('top') <= "0") {
                            $(this).css({ top: "0" });
                        }

                    });

                } else {

                    //scrolling up
                    $inclineImg.animate({ top: "+=5" }, 5, function () {

                        if ($(this).position().top >= 100) {
                            $(this).css({ top: "100px" });
                        }

                    });

                }

                //resets scroller var
                lastScrollTop = st;
            } else if (isInViewport($chinahubTarget)) {
                $inclineImg.css({ top: "100px" });

                 //if scrolling down
                 if (st >= lastScrollTop) {


                    $chinahubImg.animate({ top: "-=5" }, 5, function () {

                        if ($(this).css('top') <= "0") {
                            $(this).css({ top: "0" });
                        }

                    });

                } else {

                    //scrolling up
                    $chinahubImg.animate({ top: "+=5" }, 5, function () {

                        if ($(this).position().top >= 100) {
                            $(this).css({ top: "100px" });
                        }

                    });

                }

                //resets scroller var
                lastScrollTop = st;
            }
        

        }



    });







    var typed = new Typed('.type-here', {
        stringsElement: '#typed-strings',
        cursorChar: ' |',
        loop: false,
        typeSpeed: 150,
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

    //ajax email form with validation

    $(function () {

        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function (e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: formData
                })
                .done(function (response) {
                    // Make sure that the formMessages div has the 'success' class.
                    $(formMessages).removeClass('error');
                    $(formMessages).addClass('success');

                    // Set the message text.
                    $(formMessages).text(response);

                    // Clear the form.
                    $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                    $("#ajax-contact")[0].reset()
                })
                .fail(function (data) {
                    // Make sure that the formMessages div has the 'error' class.
                    $(formMessages).removeClass('success');
                    $(formMessages).addClass('error');

                    // Set the message text.
                    if (data.responseText !== '') {
                        $(formMessages).text(data.responseText);
                    } else {
                        $(formMessages).text('Oops! An error occured and your message could not be sent.');
                    }
                });

        });

    });


});
