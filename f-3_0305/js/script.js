$(function(){
    // 메뉴
    $(".navi > li").hover(
        function(){
            $(this).find(".submenu").stop().slideToggle(500)
            $(".submenu-bg").stop().slideToggle(500)
        }
    )
    // 슬라이드
    const slideList = $(".slide-list")
    const slideWidth = $(".slide")
    const moveSlide = ()=>{
        // autoplay 시키는 함수
        slideList.animate({marginLeft : -slideWidth} , 1000 , function(){
            $(this).append($(this).find("li:first")).css({marginLeft:0})
        })
    }
    setInterval(moveSlide , 3000)
})


// $(document).ready(function(){
//     // 서브메뉴 업 다운
//     $(".mainmenu").mouseover(function(){
//         $(this).find(".submenu").stop().slideDown(300)
//         $(".submenu-bg").stop().slideDown(300)
//     })
//     $(".mainmenu").mouseout(function(){
//         $(this).find(".submenu").stop().slideUp(300)
//         $(".submenu-bg").stop().slideUp(300)
//     })
//     // class 이름 맞는지 확인하기

//     // 슬라이드
//     setInterval(function(){
//         $(".slide-list").delay(3000);
//         $(".slide-list").animate({marginLeft:'-100%'});
//         $(".slide-list").delay(3000);
//         $(".slide-list").animate({marginLeft:'-200%'});
//         $(".slide-list").delay(3000);
//         $(".slide-list").animate({marginLeft:'0'});
//      })
// })