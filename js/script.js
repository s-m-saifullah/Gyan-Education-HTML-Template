$(function ($) {

    //Calculating distance of navbar from top
    var menuTop = $('.navbar').offset().top;
    menuTop = menuTop + 120;

    //On Scroll Event
    $(window).on('scroll', function(){
        var distTop = $(window).scrollTop();

        // Sticky menu initialization
        if (distTop > menuTop) {
            $('.navbar').addClass('menufix');
        } else {
            $('.navbar').removeClass('menufix')
        }

        //back to top button appearance

        if (distTop > 500) {
            $('.b2t_btn').fadeIn(500);
        } else {
            $('.b2t_btn').fadeOut(500);
        }
    });

    //On click event

    $('.b2t_btn').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    })




    //banner slider initialization

    $('.home_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.slider_left_arrow'),
        nextArrow: $('.slider_right_arrow')
    });


    //about us section slider initialization

    $('.about_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true
    });

    

    //Our courses section slider initialization

    $('.course_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.course_slider_left_arrow'),
        nextArrow: $('.course_slider_right_arrow'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // testimonial slider initialization

    $('.testimonial_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.test_slide_icon_prev'),
        nextArrow: $('.test_slide_icon_next')
    });


    // Our Teachers slider initialization

    $('.teachers').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    // Contact image slider initialization

    $('.contact_slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });



    // counter initialization
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // Event Calendar Initialization

    var current_yyyymm_ = moment().format("YYYYMM");

    $("#pb-calendar").pb_calendar({
        'next_month_button': '<img src="./images/arrow-next.png" class="icon">',
        'prev_month_button': '<img src="./images/arrow-prev.png" class="icon">',
        schedule_list: function (callback_, yyyymm_) {
            var temp_schedule_list_ = {};

            temp_schedule_list_[current_yyyymm_ + "05"] = [
                {
                    'ID': 1,
                    style: "red"
                }
              ];

            temp_schedule_list_[current_yyyymm_ + "15"] = [
                {
                    'ID': 2,
                    style: "red"
                }
            ];

            temp_schedule_list_[current_yyyymm_ + "20"] = [
                {
                    'ID': 3,
                    style: "green"
                },
            ];

            temp_schedule_list_[current_yyyymm_ + "22"] = [
                {
                    'ID': 4,
                    style: "green"
                },
              ];
            callback_(temp_schedule_list_);
        },
        schedule_dot_item_render: function (dot_item_el_, schedule_data_) {
            dot_item_el_.addClass(schedule_data_['style'], true);
            return dot_item_el_;
        }
    });

    // Initialized Venobox for About Page Video 

    $('.venobox').venobox({
        framewidth : '650px',
        frameheight: '400px',
        autoplay: true,
    }); 

});
