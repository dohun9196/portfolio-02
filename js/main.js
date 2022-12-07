$(function () {
    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });
    // mainSlide
    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        pasueOnHover: false,
        pasueOnFocus: false,
        prevArrow: false,
        nextArrow: false,
    });

    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    });

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    });
    // main img1
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

    // main img2
    $(".plus04").click(function () {
        $('.select04').show();
    });

    $(".xi-close").click(function () {
        $('.select04').hide();
    });

    $(".plus05").click(function () {
        $('.select05').show();
    });

    $(".xi-close").click(function () {
        $('.select05').hide();
    });

    $(".plus06").click(function () {
        $('.select06').show();
    });

    $(".xi-close").click(function () {
        $('.select06').hide();
    });
});

