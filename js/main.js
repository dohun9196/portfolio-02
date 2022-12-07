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

    $('.car_color_bottom .inner ul>li').on('click', function (event) {
        event.preventDefault();
        var _this = $(this); // 이벤트가 적용된 자신을 반환
        var idx = $(this).index();  //이벤트가 적용된 자신의 번호를 반환 0,1,2
        _this.addClass('on').siblings().removeClass('on');
        $('.car_color_bottom .inner ul>li').eq(idx).addClass('on')
            .siblings().removeClass('on')
    });
});

$(function () {
    $(".click01").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color01.jpg");
    });
    $(".click02").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color02.jpg");
    });
    $(".click03").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color03.jpg");
    });
    $(".click04").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color04.jpg");
    });
    $(".click05").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color05.jpg");
    });
    $(".click06").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color06.jpg");
    });
    $(".click07").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color07.jpg");
    });
    $(".click08").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color08.jpg");
    });
    $(".click09").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color09.jpg");
    });
    $(".click10").click(function (e) {
        e.preventDefault();
        $(".img-itm").attr("src", "/img/color10.jpg");
    });



})
