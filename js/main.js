$(function () {
    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });
    // mainSlide
    $('.mainSlide').slick({
        dots: true,
        autoplay: false,
        arrows: true,
        autoplaySpeed: 2000,
        pasueOnHover: false,
        pasueOnFocus: false,
        prevArrow: false,
        nextArrow: false,
    });

    $('.main_pro_slide').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
    });

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    });

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    });

    $('#f_link').on('change', function () {
        console.log('change', $(this).val());
        var link = $(this).val();

        if (link) {
            window.open(link)
        }
    })

});