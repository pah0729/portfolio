$(function () {
    //페이지 스크롤
    var nav = $(".nav>li");
    var cont = $("#contents>section");

    nav.click(function () {
        var target = $(this);
        var i = target.index();
        var section = cont.eq(i);
        var offset = section.offset().top;
        $("html, body").animate({
            scrollTop: offset
        }, 400);
    });


    //메뉴바 상단 고정
    var $window = $(window),
        $navgation = $(".navgation"),

        navgationOffsetTop = $navgation.offset().top;

    $window.on("scroll", function () {
        if ($window.scrollTop() > navgationOffsetTop) {
            $navgation.addClass("sticky");
        } else {
            $navgation.removeClass("sticky");
        };
    });

    //햄버거 버튼
    //모바일 메뉴 나타나기
    $(function () {
        $('.hamburger-button').on('click', function (event) {
            event.preventDefault();

            $(this).toggleClass('active');
            $('.overlay').toggleClass('visible');
        });
    });

    //아코디언 패널
    $(".panel dd:not(:first)").hide();
    $(".panel dt span:first").addClass("selected");
    $(".panel dl dt").click(function () {
        if ($("+dd", this).css("display") === "none") {
            $("dd").slideUp("slow");
            $("+dd", this).slideDown("slow");
            $("dt span").removeClass("selected");
            $("span", this).addClass("selected")
        }
    }).mouseover(function () {
        $("span", this).addClass("over");
    }).mouseout(function () {
        $("span", this).removeClass("over");
    });

    //모바일 슬라이드
    $(".gallery dd:last").prependTo(".gallery");
    $(".gallery dt:last").prependTo(".gallery");
    
    $(".gallery").css("margin-left", "-310px");

    $(".prev").click(function () {
        $(".gallery").animate({
            marginLeft: parseInt($(".gallery").css("margin-left")) + 310 + "px"
        }, "slow", function () {
            $(".gallery dd:last").prependTo(".gallery");
            $(".gallery dt:last").prependTo(".gallery");
            
            $(".gallery").css("margin-left", "-310px");
        });
    });
    $(".next").click(function () {
        $(".gallery").animate({
            marginLeft: parseInt($(".gallery").css("margin-left")) - 310 + "px"
        }, "slow", function () {
            $(".gallery dt:first").appendTo(".gallery");
            $(".gallery dd:first").appendTo(".gallery");
            
            $(".gallery").css("margin-left", "-310px");
        });
    });

    // 
    $(".slide_wrapper dd").hide();
    $(".slide_wrapper").append("<div id='glayLayer'></div><div id='overLayer'></div>");

    $("#glayLayer").click(function () {
        $(this).hide();
        $("#overLayer").hide();
    });

    $(".gallery>dt").click(function () {
        $("#glayLayer").show();
        $("#overLayer").show().html("<img src='img/close-button.svg' class='close' />" + $("+dd",
            this).html()).css({
            marginTop: "-" + $("#overLayer").height() / 2 + "px",
            marginLeft: "-" + $("#overLayer").width() / 2 + "px"
        });

        $("#overLayer img.close").click(function () {
            $("#glayLayer").hide();
            $("#overLayer").hide();
        });
        return false;
    });

    if ($.browser.msie && $.browser.version < 7) {
        $(window).scroll(function () {
            $("#glayLayer").get(0).style.setExpression("top", "$(document).scrollTop()+'px'");
            $("#overLayer").get(0).style.setExpression("top",
                "($(document).scrollTop()+$(window).height()/2)+'px'");
        });
    }
});