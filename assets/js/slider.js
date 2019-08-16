$(document).ready(function() {
    $('.s5_cnt').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        center: true,
        autoplayHoverPause: false,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        responsive: {
            414: {
                items: 1,
                autoplayHoverPause: true,
            },
            768: {
                items: 2,
                autoplayHoverPause: true,
            },
            800: {
                items: 2,
                autoplayHoverPause: true,
            },
            1024: {
                items: 3,
                autoplayHoverPause: false,
            },
            1920: {
                items: 5,
                autoplayHoverPause: false,
            },
        },
    });
    //popup關閉後會持續輪播
    var owl = $('.owl-carousel');
    owl.on('.owl.carousel', function(event) {
        if ($('.owl-item.active').length == 1) {
            owl.trigger('stop.owl.autoplay');
        } else {
            owl.trigger('play.owl.autoplay');
        }
    });
    //pc滑鼠滑開後會持續輪播
    $(' .swiper-slide').on('mouseleave', function(e) {
        owl.trigger('play.owl.autoplay', [5000]);
    });
    $(' .swiper-slide').on('mouseenter', function(e) {
        owl.trigger('stop.owl.autoplay', [5000]);
    });
});
