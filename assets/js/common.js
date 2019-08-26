var mobile = !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? false
    : true;
AOS.init();
$(function() {
    AOS.init({
        offset: 200,
        easing: 'ease-in-sine',
        duration: 1200,
    });
    // 主選單
    $('.navigation_trigger').on('click', function() {
        $('.navigation_trigger').addClass('nav_in');
        $('.nav_cover').addClass('nav_in');
        $('.contents_nav').addClass('nav_in');
        $('.nav_close').addClass('nav_in');
        $('.nav_list').addClass('nav_in');
        $('.p_menu').addClass('nav_in');
        $('body').addClass('fixed');
        return false;
    });
    $('.nav_close').on('click', function() {
        $('.navigation_trigger').removeClass('nav_in');
        $('.nav_cover').removeClass('nav_in');
        $('.contents_nav').removeClass('nav_in');
        $('.nav_close').removeClass('nav_in');
        $('.nav_list').removeClass('nav_in');
        $('.p_menu').removeClass('nav_in');
        $('body').removeClass('fixed');
        return false;
    });
    $('.nav_list a').on('click', function() {
        $('.navigation_trigger').removeClass('nav_in');
        $('.nav_cover').removeClass('nav_in');
        $('.contents_nav').removeClass('nav_in');
        $('.nav_close').removeClass('nav_in');
        $('.nav_list').removeClass('nav_in');
        $('.p_menu').removeClass('nav_in');
        $('body').removeClass('fixed');
    });

    // vip slider
    $('.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        margin: 80,
        center: true,
        autoplayHoverPause: false,
        autoplay: true,
        autoplaySpeed: 500,
        autoplayTimeout: 3500,
        responsive: {
            360: {
                items: 1,
                autoplayHoverPause: true,
            },
            375: {
                items: 1,
                autoplayHoverPause: true,
            },
            // add
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
        // dots: false,
        // nav: true,
        navText: [
            "<img src='assets/images/vip-button-prev.png'>",
            "<img src='assets/images/vip-button-next.png'>",
        ],
    });

    // 表單 - 錨點動態
    $('.gotoform').on('click', function() {
        $('html, body').animate(
            {
                scrollTop: $('#kvform').offset().top - 100,
            },
            500
        );
        return false;
    });
    // 表單 - 縣市
    $('#kvform').twzipcode({
        countyName: 'city',
        districtName: 'area',
        zipcodeName: 'zipcode',
    });
});
// 表單驗證
function resettext(id) {
    //恢復文字(onblur)
    if (id.value == '') {
        id.value = id.defaultValue;
        id.className = 'input';
    }
}
function cleartext(id) {
    //清除文字(onfocs)
    id.value = '';
    id.className = 'input';
}
function keying(id) {
    //開始打字了
}
