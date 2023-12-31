$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.__move').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });

    $('.btn_ham').on('click', function () {
        $(this).toggleClass('on');
        $(this).parent().find('.ham_nav').toggleClass('on');
    });

    $('.ham_nav>ul>li>a').on('click', function (e) {
        e.preventDefault();

        let idx = $(this).parent().index();
        $(this).parent().children('.ham_con').eq(idx).addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_slide').on('init afterChange', function (e, s, c) {
        const current = $('.main_slide .slick-current');

        current.addClass('on').siblings().removeClass('on');
        $('.main_vi .slide_num span').text(c ? (c + 1) : 1);
        $('.main_vi .slide_num strong').text(s.slideCount);
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.trend_slide').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.prem_slide').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '0'
    });

    $('.prem_list li').on('click', function (event) {
        event.preventDefault();

        let idx = $(this).index();
        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.prem_wrap .prem_box').eq(idx).addClass('on')
            .siblings().removeClass('on');
    });

    $('.main_prem .arrows .left').on('click', function () {
        $('.prem_slide').slick('slickPrev');
    });
    $('.main_prem .arrows .right').on('click', function () {
        $('.prem_slide').slick('slickNext');
    });

    $('.family_site strong').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    })

    $('.chatbot').on('click', function () {
        Swal.fire({
            title: '로그인 해주세요.',
            text: 'H.Point 통합 회원만 이용 가능합니다.',
        });
    })

    $('.btn_list .to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(window).on('resize', function () {
        $('.ham_nav').removeClass('on');
        $('.ham_con').removeAttr('style');
    });

    $('.ham_nav').on('wheel', function (e) {
        if ($('.ham_nav').hasClass('on')) {
            e.preventDefault();
        }
    });
    $('.header').on('wheel', function (e) {
        if ($('.ham_nav').hasClass('on')) {
            e.preventDefault();
        }
    });

    $('.btn_ham').on('wheel', function (e) {
        if ($('.ham_nav').hasClass('on')) {
            e.preventDefault();
        }
    });

});