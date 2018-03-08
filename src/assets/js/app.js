import $ from 'jquery';

window.$ = $;

$(document).ready(function(){
    console.log("Document is ready");
    $(".hamburger-wrapper").click(function(){
        $(this).toggleClass('open');
        $(".site-nav").toggleClass('open');
        $("body").toggleClass("no-scroll");
	});
});
