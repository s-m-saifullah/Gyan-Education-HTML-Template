$(function($){

    //banner slider initialization

    tns({
        container: '.home_slider',
        items: 1,
        slidBy: 1,
        controls: true,
        controlsPosition: 'top',
        autoplay: false,
        nav: false,
        prevButton: '.slider_left_arrow',
        nextButton: '.slider_right_arrow'
    });


    //about us section slider initialization

    tns({
        container: '.about_slider',
        items: 1,
        slidBy: 1,
        controls: false,
        autoplay: true,
        autoplayButtonOutput: false,
        nav: true,
        navContainer: '.slider_dots'
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //Our courses section slider initialization

    tns({
        container: '.course_slider',
        items: 3,
        slidBy: 1,
        controls: true,
        autoplay: false,
        nav: false,
    });
});