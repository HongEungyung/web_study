$(document).ready(function () {
  // function을 함수라고 함
  // alert("제이쿼리 실행")
  $(".gnb > li").hover(
    function () {
      // console.log(this);
      // f12번 했을 때 확인 용 평소엔 주석으로 해놔야 함

      //   메뉴 슬라이드
      $(this).find(".depth2").stop().slideDown();
    },
    function () {
      $(this).find(".depth2").stop().slideUp();
    }
  );
  //   비주얼 슬라이드
  // siblings() 형제요소
  // 이미지 1번만 보이게 하는 코드
  $(".slide-all > li").eq(0).siblings().hide();
  // 첫번째 요소 eq(0) 즉 index 0 번 제외 siblings 는 hide 해라.
  // index는 번호는 0번 부터 시작임
  // console.log($(".slide-all > li"));
  // var = 변수예약어 임의의 sildeI 라는 변수를 선언
  // 변수 slideI 에 0을 담는다 = eq(0)을 인식
  var slideI = 0;
  // 변수로 먼저 선언을 해놔야 인식을 쉽게 함. 기준을 잡는 거.
  // 그냥 index 0은 인식을 못 함. 적용 안 됨.
  // 시간차로 어떤 효과를 줄 때
  setInterval(function () {
    // slideI(= 0 = 이미지1) 가 1, 2가 될 때는 슬라이드가 더해지고 그게 아니면 slideI는 계속 0 이어라.
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    // ↑이건 시험을 위한 코드임 같은 효과를 위해 더 좋은 코드를 나중에 쓸거임. 시험을 위해선 일단 외워서 쓰기.
    $(".slide-all > li").eq(slideI).siblings().fadeOut();
    $(".slide-all > li").eq(slideI).fadeIn();
  }, 3000);
  // 3000 = 3초
//   공지사항 메뉴 탭
$(".c1 h4").click(function(){
    // console.log("click");
    $(".c1 h4 , .c1 ul").removeClass("on")
    $(this).addClass("on").next("ul").addClass("on")
})
// 모달 창 닫기 close
$(".close").click(function(){
    $("#modal").fadeOut()
    // .show / .hide 도 있음
})
// 모달 창 열기 open
$(".popup").click(function(){
    // console.log("click");
    // 또는
    // alert("강원천문대 야영장 운영개시 안내");
    $("#modal").fadeIn()
})
});