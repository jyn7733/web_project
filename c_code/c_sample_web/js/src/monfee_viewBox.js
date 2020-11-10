// monfee_viewBox.js


/* jQuery 선택자
* #box -> $('#box');
*.box - > $('.box);
*ul>li -> $('ul>li'); -> $('ul').children('li')
*ul li -> $('ul li'); -> $('ul').find('li')
*dt+dd -> $('dt+dd'); -> $('dt').next('dd');
*dt~dd -> $('dt~dd'); -> $('dt').nextAll('dd');
*이전형제선택         -> $('dt').prev('dd');
*이전형제모두         -> $('dt').prevAll('dd');
*자신을 제회한 형제   -> $('dt').siblings('dd');
*무보형제를 선택      -> $('dt').patent('dl'); $('dt').parentUntil('dd');

**css
//선택자.style.backgroundColor = "#afc";
선택자.css({'속성명' : '속성값' , '속성명': '속성값'... ...});
*/


//  var count = 0;
// setTimeout(function(){},100)
// setInterval(function(){
//   count += 1;
//   console.log(count);
// },1000) //setInterval에서 마지막 부분은 시간


// setTimeout(function(){},시간);
// setInterval(function(){},시간);
// clearInterval(setIntervla함수이름);

// var Go = setInterval(function(){
//   count += 1;
//   console.log(count);
//   if(count > 20){
//     clearInterval(Go)
//   }
// },1000) 


(function($){
/*  var count = 0;
  var Start
  var mycount = function(){ 
    Start = setInterval(function(){
    count +=  1;
    console.log(count);
  },500);
};

  $('h1').on('mouseenter',function(){
    clearInterval(Start);
  });
  
  $('h1').on('mouseleav',function(){
    mycount();
  });
*/
  var viewBox = $('#viewBox');
  viewBox.css({'overflow' : 'hidden'})
  var indicator = viewBox.find('.slide_indicator')
  var indiLi = indicator.find('li')
  var backImg = viewBox.find('.back_img');
  var backLi = backImg.find('li');
  var permission = true;

  // 순서를 언급시에는 eq()  메소드를 사용 0~......,-1,-2.....fa-js
  // 복제의 기능은 clone() -> 복제된 기능을 원본처럼 수행하게하려면 true 매개변수를 입력
  // console.log(backLi)
  var backLiLast = backLi.eq(-1).clone(); //마지막 요소 복제
  backImg.prepend(backLiLast); //복제요소 앞에 추가
  var rebackLi = backImg.find('li');
  backImg.css({'marginLeft': -100 + '%', 'width' : rebackLi.length * 100 + '%'})
  rebackLi.css({'width' : (100 / rebackLi.length) + '%'}) //내부 요소 크기 변경

  //슬라이드 버튼
  var slideBtn = viewBox.find('.slide_btn');
  var nextSlideBtn = slideBtn.children('button').eq(0);//다음
  var prevSlideBtn = slideBtn.children('button').eq(1);//이전






  
  var slideN = 0;//최초의 값
  var timed = 1000; //일정시간마다 처리하게 하는 시간

  //다음 버튼 클릭--------------------------------------------------
  nextSlideBtn.on('click',function(e){
    //a, button 요소처럼 이벤트 기능이 이미 내장된 요소는 해당 기능을 제거할 필요가 있다.
    e.preventDefault();
    if(permission){
      permission = false;

      slideN += 1;
      // if(){}else{}
      //  콜백함수
      backImg.stop().animate({'left': slideN * -100 + '%'}, function(){
        if(slideN >= backLi.length - 1){
          slideN = -1;
          backImg.stop().css({'left': slideN * -100 + '%'});
        }
        setTimeout(function(){ permission = true;},1000);
      });

      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
  }
  })
 //이전 버튼 클릭--------------------------------------------------- 
    prevSlideBtn.on('click',function(e){
      e.preventDefault();
      if(permission){
        slideN -= 1
        permission = false;
      /*
      slideN -= 1 이렇게 계산식을 쓰면 오른쪽으로 밀어내면서 5->4->3->2->1 이 순서로 흘러가게 된다.
       
      */  
      backImg.stop().animate({'left': slideN * -100 + '%'},function(){
        if(slideN <= -1){
          slideN = backLi.length-1 //5 -> 4-> 3->2->1->0
          backImg.stop().css({'left': slideN * -100 + '%'});
          /*
          5 1 2 3 4 5 에서 첫번째 5(복제한 요소)에 위치해 있으면, 마지막 5로 이동시키는 수식
          */
        } 
        setTimeout(function(){ permission = true;},1000);
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');}
    });  
    //인디케이터 클릭------------------------------
    indiLi.on('click',function(e){
      e.preventDefault();
      var its = $(this);
      var slideN = its.index();
      // console.log(itsI);
      backImg.stop().animate({'left' : slideN * -100 + '%'})
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    })
    //인디케이터 포커스 처리------------------------------
    indiLi.children('a').on('focus', function(e){
      e.preventDefault();
      var its = $(this);
      slideN = its.praent().index();
      backImg.stop().animate({'left' : slideN * -100 + '%'})
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
    })

//광고영역 일정시간마다 자동수행/마우스올릴 경우 일시정지-------------
var startInterval;
var Start =function(){
  startInterval = setInterval(function(){
    //trigger()기능 - 대신 처리하는 방아쇠 역할
    // nextSlideBtn.trigger('click');

    // 2. 직접 카운트 처리하여 수행
    slideN += 1;
      backImg.stop().animate({'left': slideN * -100 + '%'}, function(){
        if(slideN >= backLi.length - 1){
          slideN = -1;
          backImg.stop().css({'left': slideN * -100 + '%'});
        }
      });
      indiLi.eq(slideN).siblings().removeClass('action');
      indiLi.eq(slideN).addClass('action');
  },timed);
};
Start();
var StopSlide = function(){clearInterval(startInterval);};

//1. viewBox에 마우스를 올리면 정지
// viewBox.on('mouseenter',function(){StopSlide();});
//2. viewBox에서 마우스 벗어나면 재실행
// viewBox.on('mouseleve',function(){ Start();});
// 1,2통합
viewBox.on({
  'mouseenter': StopSlide,
  'mouseleave': Start
}); //함수를 객체로 만드는 것.



})(jQuery);


   /* var refn = function(i){
      i+=1;
      console.log(i);
      if(i < 20){
        refn(i);
      }else{ console.log('20이 되었습니다')}
    };*/

    /*
    jQuery에서 콜백함수란?

    하나의 메소드(함수)를 수행한 후에, 다시 함수를 수행할 수  있도록 처리하는 형태
    단, animation 기능을 가진 메소드 내 및  이벤트에서만 콜백함수의 기능을 가질 수 있다.

    선택자.on('click', function(){
      선택자.animate({기능수행}, function(){})

    })
    */ 

  //함수 내부에서 선언이 되면 클릭시  slideN = 0 에서 slideN = 1 다시 클릭하면 slideN = 0 에서 slideN = 1 이렇게 적용이 된다
  //하지만 밖에서 선언하게 되면 내부에서 변경된 내용이 그대로 적용된다.