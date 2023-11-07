$(document).ready(function () {



    if (window.innerWidth < 768) {
        var bigTitHeight = $(".sp_rep_Img .bigTit").innerHeight();

        $(".sp_rep_Img .img").css("bottom", -bigTitHeight + "px");

        var imgBottom = $(".sp_rep_Img .img").css("bottom");
        var absoluteBottomValue = Math.abs(parseInt(imgBottom, 10));


        $('.sp_rep_Img + div').css('padding-top', absoluteBottomValue)
    } else {

        var bigTitHeight = $(".sp_rep_Img .bigTit").innerHeight();
        var num = -90

        $(".sp_rep_Img .img").css("bottom", num - bigTitHeight + "px");

        var imgBottom = $(".sp_rep_Img .img").css("bottom");
        var absoluteBottomValue = Math.abs(parseInt(imgBottom, 10));


        $('.sp_rep_Img + div').css('padding-top', absoluteBottomValue)
    }

    $(window).resize(function () {
        if (window.innerWidth < 768) {
            var bigTitHeight = $(".sp_rep_Img .bigTit").innerHeight();

            $(".sp_rep_Img .img").css("bottom", -bigTitHeight + "px");

            var imgBottom = $(".sp_rep_Img .img").css("bottom");
            var absoluteBottomValue = Math.abs(parseInt(imgBottom, 10));


            $('.sp_rep_Img + div').css('padding-top', absoluteBottomValue)
        } else {

            var bigTitHeight = $(".sp_rep_Img .bigTit").innerHeight();
            var num = -90

            $(".sp_rep_Img .img").css("bottom", num - bigTitHeight + "px");

            var imgBottom = $(".sp_rep_Img .img").css("bottom");
            var absoluteBottomValue = Math.abs(parseInt(imgBottom, 10));


            $('.sp_rep_Img + div').css('padding-top', absoluteBottomValue)
        }
    });


    $('.sp_mod_keyTask .keyTask').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
                        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
                        }
                    ]

    });
    // 메뉴 fixed
    var fixGnb = $('#gnb-wrap.fixed-gnb');
    $('#gnb-wrap').addClass('fixed-gnb');
    $('#gnb-wrap.fixed-gnb').css('position', 'relative')

    // 관심기업 등록하기 버튼
    $('.qm_txt a').click(function () {
        $(this).parent().find('span').toggle()
    })

    // --- 스크롤 메뉴 수정 --
    var gnbOffset = $('.com_mod_anchor').offset();
    $('.com_mod_header, .com_mod_anchor').addClass('not_fixed');

    $('a').each(function () {
        var aName = $(this).attr('name');
        $(this).attr('id', aName)
    });

    $('.com_mod_anchor a').off("click").on('click', function () {
        var target = $(this.hash)
        var header = $('#newHeader').outerHeight();
        var not_header_height = $('.com_mod_anchor.not_fixed').outerHeight();
        var not_header_height02 = $('.com_mod_header.not_fixed').outerHeight()
        var header_height = $('.com_mod_anchor.fixed').outerHeight();
        var header_height02 = $('.com_mod_header.fixed').outerHeight();

        var offset_top = target.offset().top - not_header_height - not_header_height02 - header;
        var offset_top02 = target.offset().top - header_height - header_height02;

        if ($('.com_mod_header').hasClass("not_fixed")) {
            $('html, body').animate({
                scrollTop: offset_top + header_height + header_height02
            });
            e.preventDefault();
        } else {
            $('html, body').animate({
                scrollTop: offset_top02
            }, 300);
            e.preventDefault();
        }

    });

    var lastId,
        topMenu = $(".com_mod_anchor"),
        topMenu02 = $(".com_mod_header"),
        topMenu03 = $(".com_mod_header.fixed").outerHeight,
        topMenuHeight = topMenu.outerHeight() + topMenu02.outerHeight() + 15,

        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;

        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            menuItems
                .removeClass("active")
                .parent().end().filter("[href='#" + id + "']").addClass("active");
        }

        if ($(document).scrollTop() > gnbOffset.top) {
            $('.com_mod_header, .com_mod_anchor').addClass('fixed');
            $('.com_mod_header, .com_mod_anchor').removeClass('not_fixed');
            var headerHeight = $('.com_mod_header').outerHeight();
            $('.com_mod_anchor').css('top', headerHeight);
        } else {
            $('.com_mod_header, .com_mod_anchor').removeClass('fixed');
            $('.com_mod_header, .com_mod_anchor').addClass('not_fixed');
            $('.com_mod_anchor').css('top', 0);
            $('.com_mod_header, .com_mod_anchor li:first-child a').addClass('active');
        }
    });



    if (window.innerWidth > 1024) {
        var bizItem03 = $('.sp_mod_biz .bizDiv .item');
        if (bizItem03.length > 2) {
            $('.sp_mod_biz .bizDiv').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:true,
                responsive: [{
                        breakpoint: 1261,
                        },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,

                        }
                        }
                    ]
            });
        }
    }

    // 사업영역
    var bizItem = $('.a_mod_biz .bizDiv .item');
    if (bizItem.length > 2) {
        $('.a_mod_biz .bizDiv').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev black_arrow new_arrow"><span class="material-symbols-outlined">arrow_back_ios_new</span></button>',
            nextArrow: '<button class="slick-next black_arrow new_arrow"><span class="material-symbols-outlined">arrow_forward_ios</span></button>',
            responsive: [{
                    breakpoint: 1261,
                        },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,

                    }
                        }
                    ]
        });


        if (window.innerWidth < 1024) {
            $('.a_mod_biz .bizDiv').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<button class="slick-prev black_arrow new_arrow"><span class="material-symbols-outlined">arrow_back_ios_new</span></button>',
                nextArrow: '<button class="slick-next black_arrow new_arrow"><span class="material-symbols-outlined">arrow_forward_ios</span></button>',
                responsive: [{
                        breakpoint: 1261,
                        },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            dots: true

                        }
                        }
                    ]
            });
        }

    } else {
        bizItem.addClass('lt_biz');

        if (window.innerWidth < 1024) {
            $('.a_mod_biz .bizDiv').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<button class="slick-prev black_arrow new_arrow"><span class="material-symbols-outlined">arrow_back_ios_new</span></button>',
                nextArrow: '<button class="slick-next black_arrow new_arrow"><span class="material-symbols-outlined">arrow_forward_ios</span></button>',
                responsive: [{
                        breakpoint: 1261,
                        },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            dots: true

                        }
                        }
                    ]
            });
        }

    }

    $('.a_mod_product .product').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
                        },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,

                }
                        }
                    ]

    });

    if (window.innerWidth > 999) {

        /* 스크립트내용*/

    } else {
        $('.a_mod_partners  .a_part').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
        });

    }

    $('.a_mod_culture .culwel_wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
                        }
                    ]

    });

    $('.a_mod_interview .tab_content:first').show();
    $(".a_mod_interview .tabs li a").click(function () {
        var tab_id = $(this).attr("data-tab");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        $("#" + tab_id).fadeIn();
        $('.a_mod_interview .iv_wrap').slick('setPosition');
        $('.a_mod_interview .iv_wrap').slick('refresh');
        $('.slideshow_container').resize()
    });


    $('.a_mod_interview .iv_wrap').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        setPosition: 0,
    });

    $('.a_mod_job .tab_contents:first').show();
    $(".a_mod_job .tabs li a").click(function () {
        var tab_id = $(this).attr("data-tab");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_contents").hide();
        $("#" + tab_id).fadeIn();
    });

    $('.a_mod_comview .img_wrap').slick({
        slidesToShow: 3,
        SlidesToScroll: 1,
        arrows: true,
        infinite: true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
                        }
                    ]

    });

    var boxRecSlider = new Swiper(".box_recruit_wrap", {
        pagination: {
            el: ".box_recruit_wrap .swiper-pagination",
            clickable: true
        }
    });


    $('.b_mod_culture .culwel_wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
                        },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,

                }
                        }
                    ]

    });

    $('.b_mod_interview .tab_content:first').show();
    $(".b_mod_interview .tabs li a").click(function () {
        var tab_id = $(this).attr("data-tab");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        $("#" + tab_id).fadeIn();
        $('.b_mod_interview .iv_wrap').slick('setPosition');
        $('.b_mod_interview .iv_wrap').slick('refresh');
        $('.slideshow_container').resize()
    });

    $('.b_mod_interview .iv_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,

                }
                        },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,

                }
                        }
                    ]

    });



    var swiper = new Swiper(".b_mod_comview .img_wrap", {
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {

            768: {
                slidesPerView: 2, //브라우저가 768보다 클 때
            },
            480: {
                slidesPerView: 1, //브라우저가 768보다 클 때
            },
            0: {
                slidesPerView: 1, //브라우저가 768보다 클 때
            },
        }
    });


    $('.b_mod_product .tab_content:first').show();
    $(".b_mod_product .tabs li a").click(function () {
        var tab_id = $(this).attr("data-tab");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $('.b_mod_product .tab_content').hide();
        $("#" + tab_id).fadeIn();
    });

    $(".b_mod_product .product .tabs").mCustomScrollbar({});

    $('.b_mod_strategy .guide_wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
                        }
                    ]

    });

    if ($('.sp_mod_keyValue .keyValue_wrap dl.keyValue').length > 3) {
        $('.sp_mod_keyValue .keyValue_wrap').slick({
            slidesToShow: 4,
            arrows: true,
            dots: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,

                    }
                            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,

                    }
                            }
                        ]

        });
    }

    $(".imgFill").imgLiquid();

    $('.sp_mod_history .history:first').show();
    $(".sp_mod_history .tabs li a").click(function () {
        var tab_id = $(this).attr("data-tab");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".history").hide();
        $("#" + tab_id).fadeIn();

    });

    $('.sp_mod_content .more').click(function () {
        $(this).parent().toggleClass('more_view');
    })


    $('.sp_mod_interview .itv_wrap').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        infinite: false

    });

    var swiper = new Swiper(".sp_mod_comview .img_wrap", {
        slidesPerView: 1,
        arrows: false,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".sp_mod_strategy .guide_wrap", {
        slidesPerView: 3,
        spaceBetween: 20,
        arrows: false,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3, //브라우저가 768보다 클 때
            },
            768: {
                slidesPerView: 2, //브라우저가 768보다 클 때
            },
            480: {
                slidesPerView: 1, //브라우저가 768보다 클 때
            },
            0: {
                slidesPerView: 1, //브라우저가 768보다 클 때
            },
        }
    });

    $('.sp_mod_history02 .history:first').show();
    $(".sp_mod_history02 .tabs li a").click(function () {
        var tab_id = $(this).attr("data-tab");
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".history").hide();
        $("#" + tab_id).fadeIn();

    });

    $('.sp_mod_biz02 .bizDiv').slick({
        slidesToShow: 4,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
                        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,

                }
                        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
                        },

                    ]

    });

    var swiper = new Swiper(".sp_mod_comview02 .img_wrap", {
        slidesPerView: 1,
        arrows: false,
        pagination: { // 페이징 설정
            el: '.swiper-pagination',
            clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
        },
    });

    var helpers = {
        addZeros: function (n) {
            return (n < 10) ? '0' + n : '' + n;
        }
    };

    function sliderInit() {
        var $slider = $('.sp_mod_product02 .product');
        $slider.each(function () {
            var $sliderParent = $(this).parent();
            $(this).slick({
                slidesToShow: 1,
                arrows: true,
                dots: false,
                infinite: true

            });

            if ($(this).find('.item').length > 1) {
                $(this).siblings('.slides-numbers').show();
            }

            $(this).on('afterChange', function (event, slick, currentSlide) {
                $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
            });

            var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
            $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

        });

    }

    sliderInit();
    $('.fin_wrap').each(function () {
        // 현재 요소에서 자식으로 있는 div 엘리먼트 개수 확인
        var childDivCount = $(this).children('div').length;
        if (childDivCount >= 3) {
            $(this).slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                setPosition: 0,
                arrows: true,
                dots: false,
                speed: 300,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,

                        }
                        },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,

                        }
                        }
                    ]

            });


        }
    });


    $('.sp_mod_culture02 .culwel_wrap').slick({
        rows: 2,
        slidesPerRow: 3,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    rows: 1,
                    slidesPerRow: 3,

                }
                        },
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesPerRow: 2,

                }
                        },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,

                }
                        }
                    ]

    });




    $('.sp02_mod_strategy .guide_wrap').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,

    });

    $('.sp_mod02_finance .top a').click(function () {
        $(this).parent().children('div').show();
        $('.sp_mod02_finance .fin_wrap').addClass('on');
        $('.shadow').show();
    });

    $('.sp_mod02_finance .top > div .in_top a').click(function () {
        $('.fin_layer').hide();
        $('.shadow').hide();
        $('.sp_mod02_finance .fin_wrap').removeClass('on');
    });

    $('.sp_rep_Img03').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,

    });



    $('.sp_rep_Img_wrap .slick-dots').append('<li class="start_wrap"><button class="play">시작</button></li><li class="stop_wrap"><button class="stop">정지</button></li>');

    $('.sp_rep_Img03 .play').click(function () {
        $('.sp_rep_Img03').slick('slickPlay');
        $('.stop_wrap').show()
        $('.start_wrap').hide();
    });

    $('.sp_mod_partners04 .b_part').slick({
        slidesToShow: 6,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,

                }
                        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,

                }
                        },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,

                }
                        },
             ]
    });

    $('.sp_rep_Img03 .stop').click(function () {
        $('.sp_rep_Img03').slick('slickPause');
        $('.stop_wrap').hide()
        $('.start_wrap').css('display', 'inline-block');
    });



    $('.sp_mod_biz04 .bizDiv').slick({
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,

                }
                        },
            ]
    });



    var heightArray = $(".sp_mod_biz04 .txt").map(function () {

        return $(this).height();

    }).get();

    var maxHeight = Math.max.apply(Math, heightArray);

    $(".sp_mod_biz04 .txt").height(maxHeight);


    var swiper = new Swiper(".sp_mod_comview04 .img_wrap", {
        slidesPerView: 1,
        arrows: false,
        pagination: {
            el: ".swiper-pagination",
        }
    });


    $('.sp04_mod_product .product').slick({
        slidesToShow: 5,
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: '100px',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,

                }
                        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,

                }
                        },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px',

                }
                        },
            ]
    });

    var heightArray = $(".sp04_mod_product .item").map(function () {

        return $(this).height();

    }).get();

    var maxHeight = Math.max.apply(Math, heightArray);

    $(".sp04_mod_product .item").height(maxHeight);

    $('.sp04_mod_keyValue .kv').slick({
        rows: 3,
        slidesPerRow: 1,
        arrows: false,
        dots: true,
        infinite: true
    });


    $('.sp04_mod_emp .chart-container .bar').each(function () {
        var height = $(this).find('p').outerHeight();
        $(this).find('p').css('top', -height - 70)
    });

    $('.sp04_mod_finance .dti a').click(function () {
        $(this).find('p').toggle();
    });


    $('.piechart').easyPieChart({
        scaleColor: "transparent",
        lineWidth: 13,
        lineCap: 'butt', //Can be butt
        barColor: '#293991',
        trackColor: "#fff",
        size: 145,
        rotate: 0,
        animate: 1000,

    });
    $('.piechart_g').easyPieChart({
        scaleColor: "transparent",
        lineWidth: 13,
        lineCap: 'butt', //Can be butt
        barColor: '#cccccc',
        trackColor: "#fff",
        size: 90,
        rotate: 0,
        animate: 1000,

    });

    var msnry = new Masonry('.sp04_mod_culture .culwel_wrap', {
        itemSelector: '.item',
        columnWidth: '.item',
        percentPosition: true
    });



    $('.sp_mod_comview04 .item img').each(function () {
        var height1 = $('.sp_mod_comview04 .item img:nth-child(1)').outerHeight();
        var height2 = $('.sp_mod_comview04 .item img:nth-child(2)').outerHeight();

        $('.sp_mod_comview04 .item').css('height', height1 + height2 + 69)
    });


    $('.tips p  a').click(function () {
        $(this).parent().toggleClass('on');
        $(this).text(function (i, text) {
            return text === "-" ? "+" : "-";
        })
    });

    $('.sp_mod_history05 .tab li a').click(function () {
        var slideIndex = $(this).data('slide');
        $('.sp_mod_history05 .history_wrap').slick('slickGoTo', slideIndex);
        $('.tab li').removeClass('on'); // Remove 'on' class from all tabs
        $(this).parent().addClass('on');
    });

    $('.sp_mod_history05 .history_wrap').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $('.tab li').removeClass('on'); // Remove 'active' class from all tabs
        $('.tab li').eq(nextSlide).addClass('on');
    });

    $('.sp_mod_history05 .history_wrap').slick({
        arrows: true,
        dots: false,
        speed: 500,
        infinite: false
    });


    $('.sp_mod_cert .cert_wrap').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        centerMode: true,
        centerPadding: '100px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,

                }
                        },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,

                }
                        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
                        }
                    ]
    });

    $('.sp_mod_partners03 .b_part').slick({
        arrows: true,
        dots: false,
        slidesToShow: 5,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,

                }
                        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,

                }
                  },
            ]
    });

    $('.sp_mod_biz05 .bizDiv').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,

                }
                        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
                  },
            ]
    });

    $('.sp_mod_comview05 .img_wrap').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        centerMode: true,
        cssEase: 'linear',
        variableWidth: true,
        speed: 200,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0',
                    variableWidth: false,

                },
                        },
                        ]
    });



    var heightArray2 = $(".sp_mod_biz05 .txt").map(function () {

        return $(this).height();

    }).get();

    var maxHeight2 = Math.max.apply(Math, heightArray2);

    $(".sp_mod_biz05 .txt").height(maxHeight2);


    $('.sp_mod_comMov02 .comMov_slide').slick({
        arrows: true,
        dots: false,
    });

    var msnry = new Masonry('.sp05_mod_product .product', {
        itemSelector: '.item',
        gutter: 30
    });

    $('.sp05_mod_finance .flex_wrap').each(function () {
        // 현재 요소에서 자식으로 있는 div 엘리먼트 개수 확인
        var childDivCount02 = $(this).children('div').length;
        if (childDivCount02 >= 3) {
            $(this).slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                setPosition: 0,
                arrows: true,
                dots: false,
                setPosition: 0,
                speed: 300,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,

                        }
                        },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,

                        }
                        }
                    ]

            });


        }
    });


    $('.sp05_mod_finance .conts').on('click', 'a', function () {
        var $slide = $(this).closest('.slick-slide');
        var $popup = $slide.find('.fin_layer');

        // 해당 슬라이드의 팝업 토글
        $popup.show(); // 팝업 열기/닫기를 토글할 수 있습니다.
        $('.shadow').show();
        $('.sp05_mod_finance .flex_wrap').addClass('on');
    });

    $('.sp05_mod_finance .conts').on('click', '.close', function () {
        var $slide = $(this).closest('.slick-slide');
        var $popup = $slide.find('.fin_layer');

        $('.shadow').hide();
        $('.sp05_mod_finance .flex_wrap').removeClass('on');
        // 해당 슬라이드의 팝업 닫기
        $popup.hide();
    });

    $('.sp05_mod_finance .conts > div:not(.slick-slide)').on('click', 'a', function () {
        $(this).closest('.tit').find('.fin_layer').show();
        $('.sp05_mod_finance .flex_wrap').addClass('on');
        $('.shadow').show();
    });

    $('.sp05_mod_finance .conts > div:not(.slick-slide)').on('click', '.close', function () {
        $('.fin_layer').hide();
        $('.shadow').hide();
        $('.sp05_mod_finance .flex_wrap').removeClass('on');
    });

    var itemsPerPage = 5;
    var currentIndex = 0;
    var totalItems = $(".sp_mod_history03 .history > div").length;
    var $moreButton = $(".more_view");

    // 초기에 전체 항목을 표시
    $(".sp_mod_history03 .history > div").css("display", "none");
    $(".sp_mod_history03 .history > div:hidden").slice(0, 5).css("display", "flex");


    if ($(".sp_mod_history03 .history > div").length < 5) {
        $('.more_view').hide();
    }

    $moreButton.click(function (e) {
        currentIndex += itemsPerPage;

        $(".sp_mod_history03 .history > div:hidden").slice(0, 5).show().fadeIn(200);



        if ($(".sp_mod_history03 .history > div:hidden").length == 0) { // 컨텐츠 남아있는지 확인
            $moreButton.fadeOut(100); // 컨텐츠 없을 시 버튼 사라짐
        }

    });



    if (window.innerWidth < 768) {
        $('.fin_wrap:not(.slick-slider)').each(function () {
            $(this).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                setPosition: 0,

            });
        });


        setTimeout(function () {
            chart2.resize();
            chart3.resize();
            chart4.resize();
            chart5.resize();
            chart6.resize();
            chart7.resize();
            chart8.resize();
            chart9.resize();
        }, 200);

    }

    $('.sp05_mod_culture .culwel_wrap').slick({
        slidesToShow: 3,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
                        }
             ]

    });

    var heightArray3 = $(".sp05_mod_culture .desc").map(function () {

        return $(this).height();

    }).get();

    var maxHeight3 = Math.max.apply(Math, heightArray3);

    $(".sp05_mod_culture .desc").height(maxHeight3);




    /*$('.sp_mod_keyValue .keyValue_wrap').slick({
        slidesToShow: 4,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]

    });*/

    $('.sp_mod_talent .talent_wrap').slick({
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,

                }
                        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
                        }
                    ]

    });
});
