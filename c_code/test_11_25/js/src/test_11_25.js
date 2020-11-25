// test_11_25.js

(function($){
//header영역 스크롤시 스크롤 값이 45px 이상일 경우 fixed처리 && top_move버튼 처리
var win = $(window);
var wrap = $('#wrap')
var headBox = $('#headBox');
var headBoxOffset = $(headBox).offset().top;
var topMove = $('.top_move');

console.log(headBoxOffset)

topMove.hide();

win.on('scroll',function(e){
  var winSt = win.scrollTop();
  if(winSt >= 45){
    headBox.css({'position' : 'fixed', 'top':0, 'z-index': 1000, 'width': 100 + '%'});
  }else{
    headBox.removeAttr('style');
  };
  // top_move 버튼이 스크롤 300이하일 경우 사라지고 이상일 경우 나타남
    if(winSt >= 300){
      topMove.stop().fadeIn(300);
    }else{
      topMove.stop().fadeOut(300);
    };
  });
  //---------------------------------------------------------
  //1. view영역 버튼 클릭시 광고이미지 슬라이드 처리 && 2.indicator 클릭시 광고이미지 슬라이드 처리

  //1. 버튼 클릭시 광고이미지 슬라이트 처리
  var viewBox = $('#viewBox');
  var indi = viewBox.find('.indicator');
  var indiLi = indi.find('li');
  var viewBtn = viewBox.find('.btn_area')
  var nextBtn = viewBtn.find('.next_btn');
  var prevBtn = viewBtn.find('.prev_btn');
  var viewImgBox = viewBox.find('.view_img');
  var viewImg = viewImgBox.children('ul');
  var viewImgLi = viewImg.children('li');

  var viewImgLiLast = viewImgLi.eq(-1).clone(true);
  viewImg.prepend(viewImgLiLast);
  var reViewLi = viewImg.find('li');
  viewImg.css({ 'marginLeft' : -100 + '%','width' : reViewLi.length * 100 + '%'});
  reViewLi.css({'width' : 100/reViewLi.length + "%" });

  var timed = 1000;
  var permission = true;
  var slideN = 0;
  nextBtn.on('click',function(e){
    e.preventDefault();
    if(permission){
      permission = false;
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
    }
    });
  prevBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      slideN -= 1;
      viewImg.stop().animate({'left' : slideN * -100 + '%'},function(){
      
      if(slideN <= -1){
        slideN = viewImgLi.length - 1; 
        viewImg.css({'left' : slideN * -100 + '%'});
      }
      setTimeout(function(){permission = true},100);
    });
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
    }
  })  
  //-------------------------------------------------------------------------
  //indicator 영역 (마우스 클릭과 포커스 처리)
  indiLi.on('click focus',function(e){
    e.preventDefault();
    var it = $(this);
    var slideN = it.index()

    viewImg.stop().animate({'left' : slideN * -100 + '%'})
    indiLi.eq(slideN).addClass('action')
    indiLi.eq(slideN).siblings().removeClass('action')
  })
  indiLi.children('a').on('focus', function(e){
    e.preventDefault();
    var its = $(this);
    slideN = its.parent().index();
    viewImg.stop().animate({'left' : slideN * -100 + '%'})
    indiLi.eq(slideN).siblings().removeClass('action');
    indiLi.eq(slideN).addClass('action');
  })
  //-----------------------------------------------------------------------
  //마우스가 view 영역을 벗어나면 재생, 안에 머무르면 멈춤 처리
  var startInterval;
  var Start =function(){
  startInterval = setInterval(function(){
     nextBtn.trigger('click');
  },timed);
};
Start();
var StopSlide = function(){clearInterval(startInterval);};

viewBox.on({
  'mouseenter': StopSlide,
  'mouseleave': Start
});
//----------------------------------

})(jQuery);
