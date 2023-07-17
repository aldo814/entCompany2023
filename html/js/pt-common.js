$(document).ready(function () {
    
    // 메뉴 fixed
            var fixGnb = $('#gnb-wrap.fixed-gnb');
            $('#gnb-wrap').addClass('fixed-gnb');
            $('#gnb-wrap.fixed-gnb').css('position', 'relative')

            // 관심기업 등록하기 버튼
            $('.qm_txt a').click(function() {
                $(this).parent().find('span').toggle()
            })

            // --- 스크롤 메뉴 수정 --
            var gnbOffset = $('.com_mod_anchor').offset();
            $('.com_mod_header, .com_mod_anchor').addClass('not_fixed');

            $('a').each(function() {
                var aName = $(this).attr('name');
                $(this).attr('id', aName)
            });

            $('.com_mod_anchor a').off("click").on('click', function() {
                var target = $(this.hash)
                var header = $('#header').outerHeight();
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
                topMenuHeight = topMenu.outerHeight() + topMenu02.outerHeight() + 15,

                menuItems = topMenu.find("a"),
                scrollItems = menuItems.map(function() {
                    var item = $($(this).attr("href"));
                    if (item.length) {
                        return item;
                    }
                });

            $(window).scroll(function() {
                var fromTop = $(this).scrollTop() + topMenuHeight;

                var cur = scrollItems.map(function() {
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
                    var headerHeight = $('.com_mod_header').height();
                    $('.com_mod_anchor').css('top', headerHeight + 48);
                } else {
                    $('.com_mod_header, .com_mod_anchor').removeClass('fixed');
                    $('.com_mod_header, .com_mod_anchor').addClass('not_fixed');
                    $('.com_mod_anchor').css('top', 0);
                    $('.com_mod_header, .com_mod_anchor li:first-child a').addClass('active');
                }
            });



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
                        dots:true

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
                        dots:true

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
        dots:true,
        setPosition : 0,
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

     var boxRecSlider = new Swiper(".box_recruit_wrap",{
                        pagination: {
                            el: ".box_recruit_wrap .swiper-pagination",
                            clickable: true
                        }
                    });
    
    
    $('.b_mod_culture .culwel_wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
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
        dots:true,
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
            slidesPerView: 2,  //브라우저가 768보다 클 때
          },
            480: {
            slidesPerView: 1,  //브라우저가 768보다 클 때
          },
              0: {
            slidesPerView: 1,  //브라우저가 768보다 클 때
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
    
      $(".b_mod_product .product .tabs").mCustomScrollbar({
      });
    
    $('.b_mod_strategy .guide_wrap').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots:true,
        responsive: [
                    {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,

                    }
                        }
                    ]

    });

});

$(window).resize(function(){ 
    if (window.innerWidth > 999) {  

/* 스크립트내용*/ 

} else {

$('.a_mod_partners  .a_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });

}
}).resize();


