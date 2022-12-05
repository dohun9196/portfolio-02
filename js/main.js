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

    $(".plus01").click(function () {
        $('.select01').show();
    });

    $(".xi-close").click(function () {
        $('.select01').hide();
    });

    $(".plus02").click(function () {
        $('.select02').show();
    });

    $(".xi-close").click(function () {
        $('.select02').hide();
    });

    $(".plus03").click(function () {
        $('.select03').show();
    });

    $(".xi-close").click(function () {
        $('.select03').hide();
    });
});

