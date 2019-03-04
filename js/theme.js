/* START PRELOADER JS ========================================================================================= */
$(window).on('load', function () { // makes sure the whole site is loaded
    $('#preloader_spinner').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(150).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(150).css({'overflow':'visible'})
})
/* END PRELOADER JS ========================================================================================= */

/* START BODY SCROLL ANIMATION ========================================================================================= */
function bodyScrollAnimation()
{
    if ($('body').data('scroll-animation') === true) // <body> with data-scroll-animation attribute
        new WOW().init(); // start wow plugins
}
bodyScrollAnimation();
/* END BODY SCROLL ANIMATION ========================================================================================= */

/* START NAVBAR ONCLICK ANIMATION ========================================================================================= */
$('.header_area .navbar-nav li a[href^="#"]:not([href="#"])').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 80
    }, 1500);
    event.preventDefault();
});
/* END NAVBAR ONCLICK ANIMATION ========================================================================================= */

/* START NAVBAR SCROLL ANIMATION ========================================================================================= */
var nav_offset_top = $('.header_area').offset().top; // save current offset top first (default return: 0)
function stickyHeader() 
{
    if ($('.header_area').length) // if header_area class is exist
    {
        var stickyScrollPos = nav_offset_top;
        if($(window).scrollTop() > stickyScrollPos) // when scroll not at very top
        {
            $('.header_area').removeClass('wow slideIn animated');
            $('.header_area').addClass('sticky-fixed wow fadeInDown animated');
        }
        else if($(window).scrollTop() <= stickyScrollPos) // when scroll at very top
        {
            $('.header_area').removeClass('sticky-fixed wow fadeInDown animated');
            $('.header_area').addClass('wow slideIn animated');
        }
    }
}

$(window).on('scroll', function(){	// instance of fuction while Window Scroll event
    stickyHeader();
});
/* END NAVBAR SCROLL ANIMATION ========================================================================================= */

/* START SKILL AREA ANIMATION ========================================================================================= */
$('.skill_item_inner').each(function(){
    var waypoints = $(this).waypoint(function(direction) // call waypoint function
    {
        $('.progress-bar').each(function(idx){    
            $(this).css('width', $(this).attr('aria-valuenow') + '%');
        })
    },
    {
        offset: 'bottom-in-view'
    });
});
/* END SKILL AREA ANIMATION ========================================================================================= */
