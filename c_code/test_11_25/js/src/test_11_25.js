// test_11_25.js

(function($){
//1.  header영역 스크롤시 스크롤 값이 45px 이상일 경우 fixed처리 && 2. top_move버튼 처리
var win = $(window); //브라우저 선언(불러오기)
var headBox = $('#headBox'); //hyeadBox 선언(불러오기)
var topMove = $('.top_move'); // top_move 선언(불러오기)

topMove.hide();

//1.  header영역 스크롤시 스크롤 값이 45px 이상일 경우 fixed처리
win.on('scroll',function(e){//브라우저를 스크롤 했을 때 다음 기능을 수행하라.
  var winSt = win.scrollTop();//브라우저가 스크롤 했을 때의 값
  if(winSt >= 45){//스크롤 값을 비교
    headBox.css({'position' : 'fixed', 'top':0, 'z-index': 1000, 'width': 100 + '%'}); 
    //비교한 식이 참이면 headerBox의 포지션과 너비 값을 변경
  }else{
    headBox.removeAttr('style'); //참이 아니면 위에 적용한 스타일을 지워라
  };
  // 2. top_move 버튼이 스크롤 300이하일 경우 사라지고 이상일 경우 나타남
    if(winSt >= 300){//브라우저의 스크롤 값이 300보다 크면
      topMove.stop().fadeIn(300);//topmove가 나타난다
    }else{
      topMove.stop().fadeOut(300);//300보다 작아지면 topmove가 사라진다
    };
  });
  //---------------------------------------------------------
  //1. view영역 버튼 클릭시 광고이미지 슬라이드 처리 && 2.indicator 클릭시 광고이미지 슬라이드 처리

  //1. 버튼 클릭시 광고이미지 슬라이드 처리
  var viewBox = $('#viewBox');//view(광고)영역 선언
  var indi = viewBox.find('.indicator');//.indicator(ul) 선언
  var indiLi = indi.find('li');//indicator(ul)안에 있는 li 선언
  var viewBtn = viewBox.find('.btn_area')//버튼영역 선언
  var nextBtn = viewBtn.find('.next_btn');//버튼 영역 안에 있는 다음 버튼 선언
  var prevBtn = viewBtn.find('.prev_btn');//버튼 영역 안에 있는 이전 버튼 선언
  var viewImgBox = viewBox.find('.view_img');//viewBox영역에 있는 viewimg(div) 선언
  var viewImg = viewImgBox.children('ul');//viewimg 안에 있는 ul 선언
  var viewImgLi = viewImg.children('li');//viewimg 안에 ul의 자식 선언

  var viewImgLiLast = viewImgLi.eq(-1).clone(true);//광고영역의 이미지 (li)의 마지막 요소를 복제
  viewImg.prepend(viewImgLiLast);//복제한 요소를 ul의 맨 앞에 추가
  var reViewLi = viewImg.find('li');//추가된 li까지 
  viewImg.css({ 'marginLeft' : -100 + '%','width' : reViewLi.length * 100 + '%'});//복제된 li로 인해 지정했던 ul의 값을 재지정
  reViewLi.css({'width' : 100/reViewLi.length + "%" });//복제된 li로 인해 각각의 li의 값들을 재지정

  var timed = 2000;//특정 기능을 적용될 때 해당 수치만큼 시간이 흐른뒤 적용되도록 해주기 위한 변수
  var permission = true; //버튼이나 기능이 여러번 이벤트가 적용될 때 이를 한번만 적용될 수 있도록 해주는 변수
  var slideN = 0;//임의의 수를 지정하기 위한 변수
  nextBtn.on('click',function(e){ //다음버튼을 클릭했을 때 다음의 기능을 수행
    e.preventDefault();//요소에 있는 원래의 기능을 제거
    if(permission){//기능의 제한을 주는 요소의 값이 참인지 비교
      permission = false;//참일 경우 해당 요소를 거짓으로 바꿔줌
      if(slideN >= viewImgLi.length -1){//임의의 변수가 이미지 li들에서 -1값보다 크다면, 다음을 수행해라
        slideN = - 1 // 임의의 변수 값 변경
        viewImg.css({'left': slideN * -100 + '%'});//변경된 임의의 변수의 값으로 li를 이동
      }
      slideN += 1;//임의의 변수에 값을 더함
      viewImg.stop().animate({'left' : slideN * -100 + '%'},function(){
      });//애니메이션 효과로 증가한 임의의 변수 값 * -100한 만큼 li 이동
      setTimeout(function(){permission = true},100);//버튼을 여러번 클릭해도 해당 시간이 흐른뒤 한번씩 움직이도록 기능 추가
      
      indiLi.eq(slideN).siblings().removeClass('action');//이미지 li가 움직일 때 해당 이미지 li순서와 인디케이터 li의 순서를 제외한 li의 class="action"값을 제거 
      indiLi.eq(slideN).addClass('action');//이미지 li가 움직일 때 해당 이미지 li순서와 인디케이터 li의 순서가 같은 아이에게 class="action"값을 부여
      pageN();//현재 페이지 번호가 인디케이터 li의 순서의 번호가 나타나도록 해주는 함수
    }
    });
  prevBtn.on('click', function(e){//다음 버튼을 클릭시 다음 기능을 수행
    e.preventDefault(); //요소에 있는 원래의 기능을 제거
    if(permission){ //기능의 제한을 주는 요소의 값이 참인지 비교
      permission = false; //참일 경우 해당 요소를 거짓으로 바꿔줌
      slideN -= 1;//임의의 변수의 값을 변경
      viewImg.stop().animate({'left' : slideN * -100 + '%'},function(){//임의의 변수만큼 ul 이동 후 안의 기능 수행     
      if(slideN <= -1){//임의의 변수 비교
        slideN = viewImgLi.length - 1; //비교값이 참이면 이미지li에서 -1한 값을 임의의 변수 값으로 변경
        viewImg.css({'left' : slideN * -100 + '%'});//변경한 임의의 변수 값으로 ul을 이동
      }
      setTimeout(function(){permission = true},100);//버튼을 여러번 클릭해도 해당 시간이 흐른뒤 한번씩 움직이도록 기능 추가
    });
    indiLi.eq(slideN).siblings().removeClass('action');//이미지 li가 움직일 때 해당 이미지 li순서와 인디케이터 li의 순서를 제외한 li의 class="action"값을 제거 
    indiLi.eq(slideN).addClass('action');//이미지 li가 움직일 때 해당 이미지 li순서와 인디케이터 li의 순서가 같은 아이에게 class="action"값을 부여
    pageN()-1//현재 페이지 번호가 인디케이터 li의 순서의 번호가 나타나도록 해주는 함수(이전 버튼 클릭시 값이 감소하기 때문에 -1를 해줌)
    }
  })  
  //-------------------------------------------------------------------------
  //2. indicator 영역 (마우스 클릭과 포커스 처리)
  indiLi.on('click focus',function(e){
    e.preventDefault();//요소에 있는 원래의 기능을 제거
    var it = $(this);//현재 클릭한 요소값
    var slideN = it.index()//현재 클릭한 요소의 순서값
    viewImg.stop().animate({'left' : slideN * -100 + '%'})//클릭한 순서값으로 ul을 이동
    indiLi.eq(slideN).addClass('action')//클릭한 순서값의 li에 'action' class 추가
    indiLi.eq(slideN).siblings().removeClass('action')//클릭한 li를 제외한 모든 li에게서 'action' class값 제거
    pageN();//현재 페이지 번호가 인디케이터 li의 순서의 번호가 나타나도록 해주는 함수
  })
  indiLi.children('a').on('focus', function(e){
    e.preventDefault();//요소에 있는 원래의 기능을 제거
    var its = $(this);//현재 클릭한 요소값
    slideN = its.parent().index();//현재 클릭한 요소의 순서값
    viewImg.stop().animate({'left' : slideN * -100 + '%'})//클릭한 순서값으로 ul을 이동
    indiLi.eq(slideN).siblings().removeClass('action');//클릭한 순서값의 li에 'action' class 추가
    indiLi.eq(slideN).addClass('action');//클릭한 li를 제외한 모든 li에게서 'action' class값 제거
    pageN();//현재 페이지 번호가 인디케이터 li의 순서의 번호가 나타나도록 해주는 함수
  })

  // //3. 현재/전체 페이지 표시
    var conutPage = viewBox.find('.count_page');//viewBox안에 있는 count_page 불러옴
    var count = conutPage.find('.count');//count_page안에 있는 span.count 불러옴
    var all = conutPage.find('.all');//count_page안에 있는 all.count 불러옴
  
    var allPage = viewImgLi.length;//allPage에 이미지 li의 개수를 넣어줌
    var pageN = function(){//현재 페이지와 전체페이지를 보여주는 기능을 함수화 해줌
      var it = $(this);//현재 클릭되거나 포커스된 요소
      slideN = indi.children('.action').index();//indi(ul)의 자식 요소의 class .action의 순서
      count.text(slideN + 1);//span.count에 indi(ul)의 자식 요소의 class .action의 순서 값을 가진 요소에 +1를 한 값을 넣어줌
    }
    all.text(allPage)//이미지 li 전체 개수가 들어간 것을 span.all에 넣어줌

  //-----------------------------------------------------------------------
  //마우스가 view 영역을 벗어나면 재생, 안에 머무르면 멈춤 처리
  var startInterval;//변수선언
  var Start =function(){//함수생성
  startInterval = setInterval(function(){//일정시간 마다 기능을 반복하게 해줌
    //  nextBtn.trigger('click');
    if(slideN >= viewImgLi.length -1){
      slideN = - 1
      viewImg.css({'left': slideN * -100 + '%'});
    }
    slideN += 1;
    viewImg.stop().animate({'left' : slideN * -100 + '%'},function(){
    });
    setTimeout(function(){permission = true},100);
    
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
    pageN();
  },timed);// 위의 기능을 timed에 설정해준 값 뒤에 계속해서 실행되게 함
};
Start();//만들어준 함수 실행
var StopSlide = function(){clearInterval(startInterval)};//반복실행하게 만든 아이를 멈출 수 있게 해줌

viewBox.on({
  'mouseenter': StopSlide, //광고영역에 마우스를 올리면 반복실행 하던 기능을 멈춰라
  'mouseleave': Start//광고영역에서 마우스를 떼면 반복실행 해라.
});
//----------------------------------

})(jQuery);
