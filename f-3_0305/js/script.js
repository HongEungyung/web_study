$(function () {
  // 메뉴
  $(".navi").hover(function () {
    $(this).find(".submenu").stop().slideToggle(500);
    $(".submenu-bg").stop().slideToggle(500);
  });
  // 슬라이드
  const slideList = $(".slide-list");
  const slideWidth = $(".slide li").width(); // 왼쪽에서 오른쪽으로 이동하면서 바뀜
//   const slideWidth = $(".slide"); 제자리에서 사진만 바뀜
  const moveSlide = () => {
    // autoplay 시키는 함수
    slideList.animate({ marginLeft: -slideWidth }, 1000, function () {
      $(this).append($(this).find("li:first")).css({ marginLeft: 0 });
    });
  };
  setInterval(moveSlide, 3000);

  // 탭 메뉴
  $(".tapmenu > li > a").click(function (e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active")
  });

//   모달
$(".notice li").click(function(){
    $("#modal").addClass("active")
})
$(".modal-btn").click(function(){
    $("#modal").removeClass("active")
})
});

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
