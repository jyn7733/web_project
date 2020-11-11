// ex_02_slideBtnBanner3.js
(function($){
  var indiHorizontalSlide = $('.indicator_horizontal_slide');
  var indicator = indiHorizontalSlide.find('.indicator');
  var indicatorLi = indicator.children('li');

  var slide = indiHorizontalSlide.find('.slide_wrap');
  var slideUl = slide.children('ul');
  var slideLi = slideUl.children('li');
  var slideLink = slideLi.children('a');

  var permission =true;
  var indiSlN = 0;
  var timed = 500;

  //slide_wrap 내부에 a focus기능 강제 비처리
  slideLink.attr({'tabIndex' : '-1'});

  var typeTest = function(evt){
    //console.log(evt.type);
    if(permission && evt.type === 'focus'){
      permission = false;
      console.log('포커스 처리되었음');
    }else if(permission  && evt.type === 'click'){
      permission = false;
      console.log('클릭 되었음')
    }else{
      console.log('...')
    }
    // switch(evt.type){
    //   case 'focus' :
    //     console.log('f')
    //     break
    //   case 'click' :
    //     console.log('c')  
    // };
  };

  //indicator 클릭시 ul 이동 -> a에 focus 처리로 변경, 실제 배너에 a는 별도로 focus 처리
  indicatorLi.children('a').on('focus',function(e){
    e.preventDefault();

    typeTest(e);
    
      var it = $(this);
      indiSlN = it.parent('li').index();
      indicatorLi.eq(indiSlN).addClass('action')
      indicatorLi.eq(indiSlN).siblings().removeClass('action');
      slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});
  })

  indicatorLi.on('click',function(e){
    e.preventDefault();

    typeTest(e);

    var it = $(this);
    indiSlN =it.index();
    
    indicatorLi.eq(indiSlN).addClass('action')
    indicatorLi.eq(indiSlN).siblings().removeClass('action');
    slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});
    var propertyLink = it.children('a').attr('href');
    var thatPosition = $(propertyLink)
    thatPosition.attr({'tabIndex': '0'}); //attr 속성
    thatPosition.focus();
    
  })



})(jQuery);