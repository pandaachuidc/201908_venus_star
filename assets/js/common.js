var mobile = (!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? false : true);
AOS.init();
$(function(){
    AOS.init({
        offset: 200,
        easing: 'ease-in-sine',
        duration: 700,
    });
    // 主選單
    $(".navigation_trigger").on("click", function() {
        $(".navigation_trigger").addClass('nav_in');
        $(".nav_cover").addClass('nav_in');
        $(".contents_nav").addClass('nav_in');
        $(".nav_close").addClass('nav_in');
        $(".nav_list").addClass('nav_in');
        $(".p_menu").addClass('nav_in');
        $("body").addClass('fixed');
        return false;
    });
    $(".nav_close").on("click", function() {
        $(".navigation_trigger").removeClass('nav_in');
        $(".nav_cover").removeClass('nav_in');
        $(".contents_nav").removeClass('nav_in');
        $(".nav_close").removeClass('nav_in');
        $(".nav_list").removeClass('nav_in');
        $(".p_menu").removeClass('nav_in');
        $("body").removeClass('fixed');
        return false;
    });    
    $(".nav_list a").on("click", function(){
        $(".navigation_trigger").removeClass('nav_in');
        $(".nav_cover").removeClass('nav_in');
        $(".contents_nav").removeClass('nav_in');
        $(".nav_close").removeClass('nav_in');
        $(".nav_list").removeClass('nav_in');
        $(".p_menu").removeClass('nav_in');
        $("body").removeClass('fixed');
    });

    // VIP Slider
    vipSwiper = new Swiper ('.vip-content', {
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        a11y: true,
        autoplay: {
            disableOnInteraction: false,
        },
        spaceBetween: 50,
        pagination: {
            el: '.vip-content .swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.vip-content .swiper-button-next',
            prevEl: '.vip-content .swiper-button-prev',
        },
        paginationClickable: true,
        breakpoints: {
            640: {
                slidesPerView: 1
            }
        }
    });

    // 表單 - 錨點動態
    $(".gotoform").on("click", function(){
        $("html, body").animate({
            scrollTop: $("#kvform").offset().top - 100
        }, 500);
        return false;
    });
    // 表單 - 縣市
    $('#kvform').twzipcode({
        countyName: 'city',
        districtName: 'area',
        zipcodeName: 'zipcode'
    });
});
// 表單驗證
function resettext(id){ //恢復文字(onblur)
    if(id.value == "") {
        id.value = id.defaultValue;
        id.className ="input";  
    }
}
function cleartext (id){ //清除文字(onfocs)
   id.value ="";
   id.className ="input";      
}
function keying (id){ //開始打字了

}