
$(function(){
    // 메뉴
    $(".mainmenu").mouseover(function() {
        $(".submenu").stop().slideDown(200);
    });
        $(".mainmenu").mouseout(function() {
        $(".submenu").stop().slideUp(200);
    });

    // 슬라이드
    setInterval(function(){	
        $('.slide ul').animate({top:-300},1000,function(){
            $('.slide li').eq(0).appendTo('.slide ul');
            $('.slide ul').css({top:0});	
        })
    },3000);

    // 공지사항/갤러리
    $(".tab_btn li").click(function(){
        var idx = $(this).index();
        $(".tab_btn li").removeClass("active");
        $(".tab_btn li").eq(idx).addClass("active");
        $(".tab_con ul").hide();
        $(".tab_con ul").eq(idx).show();
    });

    $(".open").click(function(){
        $(".pop_up").show();
    });
    $(".close").click(function(){
        $(".pop_up").hide();
    });
});