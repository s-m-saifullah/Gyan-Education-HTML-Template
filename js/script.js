$(function($){
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
});