$(function () {
    // 화면 크기
    var a = $(".header_img li").width();;
    var b = $(".header_img li").width();;
    a = "-" + a;


    // 사이드 메뉴 hover
    $(".sns_logo").attr("onmouseover", function () {
        this.attr = "onmouseout"
    });


    //햄버거 버튼
    //모바일 메뉴 나타나기
    $('.hamburger-button').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible');
    });


    // header 이미지 슬라이드
    // 모바일 이미지 슬라이드
    $("header_img_m li:last").prependTo(".header_img_m");
    $(".header_img_m").css("margin-left", a + "px");

    function cc() {
        $(".header_img_m").animate({
            marginLeft: parseInt($(".header_img_m").css("margin-left")) - b + "px"
        }, 5000, function () {
            $(".header_img_m").css("margin-left", a + "px")
            $(".header_img_m li:first").appendTo(".header_img_m");
        });
    }
    // 자동 이동
    var timer = setInterval(function () {
        cc();
    }, "fast");

    
    // 태블릿 이미지 슬라이드
    $("header_img_tab li:last").prependTo(".header_img_tab");
    $(".header_img_tab").css("margin-left", a + "px");

    function bb() {
        $(".header_img_tab").animate({
            marginLeft: parseInt($(".header_img_tab").css("margin-left")) - b + "px"
        }, 5000, function () {
            $(".header_img_tab").css("margin-left", a + "px")
            $(".header_img_tab li:first").appendTo(".header_img_tab");
        });
    }
    // 자동 이동
    var timer = setInterval(function () {
        bb();
    }, "fast");


    // 화면 크기 맞춤
    $(window).resize(function () {
        a = $(".header_img li").width();
        b = $(".header_img li").width();
        a = "-" + a;

        $(".header_img li:last").prependTo(".header_img");
        $(".header_img").css("margin-left", a + "px");
    });

    // 다음 버튼 클릭 처리
    $(".next").click(function () {
        $(".header_img").animate({
            marginLeft: parseInt($(".header_img").css("margin-left")) - b + "px"
        }, "slow", function () {
            $(".header_img").css("margin-left", a + "px");
            $(".header_img li:first").appendTo(".header_img");
        });
    });

    // 이전 버튼 클릭 처리
    $(".prev").click(function () {
        $(".header_img").animate({
            marginLeft: parseInt($(".header_img").css("margin-left")) + b + "px"
        }, "slow", function () {
            $(".header_img").css("margin-left", a + "px");
            $(".header_img li:last").prependTo(".header_img");
        });
    });


    // header 다음 이전 버튼 hover
    $(".controls").attr("onmouseover", function () {
        this.attr = "onmouseout"
    });


    // 탭메뉴
    $("ul.panel>li:not(#tab1)").hide();
    $("ul.tab>li a").click(function () {
        $("ul.tab>li a").removeClass("selected");
        $(this).addClass("selected");
        $("ul.panel>li").hide();
        $($(this).attr("href")).show();
        return false;
    });


    // 이미지 슬라이드
    $(".slides li:last").prependTo(".slides");
    $(".slides").css("margin-left", "-244px");

    function aa() {
        $(".slides").animate({
            marginLeft: parseInt($(".slides").css("margin-left")) - 244 + "px"
        }, 5000, function () {
            $(".slides").css("margin-left", "-244px")
            $(".slides li:first").appendTo(".slides");
        });
    }
    // 자동 이동
    var timer = setInterval(function () {
        aa();
    }, "fast");


});