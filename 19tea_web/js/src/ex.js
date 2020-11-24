// indicator 색깔바꾸기
var indicator = viewBox.find('.slide_indicator');
var indiLi = indicator.find('li');

// ↓↓↓↓ 선택한 li들중에서 라는 예문
indiLi.on('click', function(e){
  e.preventDefault();
  var its = $(this); //$(this)는 click했을때 선택되는 것'들' 중복되는값
  slideN = its.index(); //.index는 순서를 확인하는 아이
  // console.log(itI);
  backImg.stop().animate({'left': slideN * -100 + '%'});
  // indiLi.removeClass('action');
  /*↓↓권장*/
  indiLi.eq(slideN).siblings().removeClass('action');
  indiLi.eq(slideN).addClass('action');
});

// 내가 했던거  
// slideIndi.each(function(index){
//   $(this).on('click', function(){
//       $(this).addClass('active').siblings().removeClass('active');
//       slideIndiUl = index;
//       slideindiUlLi.animate({left: '-' + (listBoxWidth*index)+'px'}, 200);
//   });
//});

// 인디케이터 포커스 버튼 클릭======================================================
//
indiLi.children('a').on('focus', function(e){
  e.preventDefault();
  var its= $(this); 
  slideN = its.parent().index(); //li가 아닌 부모의 순서값을 가지고와야함
  backImg.stop().animate({'left': slideN * -100 + '%'});
  indiLi.eq(slideN).siblings().removeClass('action');
  indiLi.eq(slideN).addClass('action');
  //** 계속 반복문이 있으므로 함수도 생각해봐야함
});

// 광고영역 일정시간마다 자동수행/ 마우스 올릴경우 일시정지 =======================

var startInterval;
var Start = function(){
  // setInterval 일정시간마다 ~실행해라
  startInterval = setInterval(function(){
    // 1. trigger() 기능 - 대신 처리하는 방아쇠
    // nextSlideBtn.trigger('click');

    //=============================================
    //2 직접 카운트 처리하여 수행
    slideN += 1;
    backImg.stop().animate({'left': slideN * -100 + '%'},function(){
      if(slideN >= backLi.length-1){
        slideN = -1;
        backImg.stop().css({'left': slideN * -100 + '%'});
      }
      
    });
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  }, timed);
};
Start();

// 1. viewBox 마우스올리면 일시정지해라
var StopSlide = function(){
  clearInterval(startInterval);
};
// viewBox.on('mouseenter', function(){
//   clearInterval(startInterval);
//   StopSlide();
// });

//2. viewBox 에서 마우스 벗어나면 재실행

// viewBox.on('mouseleave', function(){
//   Start();
// });