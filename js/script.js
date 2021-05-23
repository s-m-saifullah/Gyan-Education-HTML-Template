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
        items: 1,
        slidBy: 1,
        controls: true,
        autoplay: false,
        nav: false,
        touch: true,
        mouseDrag: true,
        prevButton: '.course_slider_left_arrow',
        nextButton: '.course_slider_right_arrow',
        responsive: {
            1024: {
                items: 3
            },
            600: {
                items: 2
            }
        }
    });

    // Event Calendar Initialization

    var current_yyyymm_ = moment().format("YYYYMM");

    $("#pb-calendar").pb_calendar({
        'next_month_button' : '<img src="./images/arrow-next.png" class="icon">',
	  'prev_month_button' : '<img src="./images/arrow-prev.png" class="icon">',
        schedule_list : function(callback_, yyyymm_){
            var temp_schedule_list_ = {};
        
            temp_schedule_list_[current_yyyymm_+"05"] = [
              {'ID' : 1, style : "red"}
              ];

            temp_schedule_list_[current_yyyymm_+"15"] = [
              {'ID' : 2, style : "red"}
            ];
        
            temp_schedule_list_[current_yyyymm_+"20"] = [
              {'ID' : 3, style : "green"},
            ];

            temp_schedule_list_[current_yyyymm_+"22"] = [
                {'ID' : 4, style : "green"},
              ];
            callback_(temp_schedule_list_);
          },
          schedule_dot_item_render : function(dot_item_el_, schedule_data_){
            dot_item_el_.addClass(schedule_data_['style'], true);
            return dot_item_el_;}
    });
});