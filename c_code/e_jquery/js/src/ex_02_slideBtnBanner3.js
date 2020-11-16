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
  indicatorLi.children('a').on('mouseenter focus click',function(e){
    e.preventDefault();


    
      var it = $(this);
      indiSlN = it.parent('li').index(); //a요소의 부보인 li의 index번호(순서)
      indicatorLi.eq(indiSlN).addClass('action')
      indicatorLi.eq(indiSlN).siblings().removeClass('action');
      // slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});
      // typeTest(e);

      if(e.type === 'focus' || e.type === 'mouseenter'){
        slideUl.stop().animate({'marginLeft': indiSlN * -100 + '%'}, timed);      
      }else if(e.type === 'click'){
        setTimeout(function(){
        var thatLink = it.attr('href');
        $(thatLink).attr({'tabIndex': 0});
        // $(thatLink).parent('li'.siblings().children('a').attr({'tabIndex': -1}))
        slideLi.eq(indiSlN).siblings().children('a').attr({'tabIndex': -1});
        $(thatLink).focus(); 
        },timed + 10);
      }; //indiLi.children('a').on('focus')

      slideLi.find('a').on('blur', function(){
        $(this).attr({'tabIndex' : -1});
      })
  })

 // 클릭기능 수행
  // indicatorLi.on('click',function(e){
  //   e.preventDefault();

  //   typeTest(e);

  //   var it = $(this);
  //   indiSlN =it.index();
  //   var propertyLink = it.children('a').attr('href'); //a 태크의 속성인 href를 찾아서 변수에 집어넣음
  //   var thatPosition = $(propertyLink) 

  //   // slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});
  //   // indiLi.eq(indiSlN).addClass('action');
  //   // indiLi.eq(indiSlN).siblings().removeClass('action');       
  //   // slideUl.stop().css({'marginLeft': indiSlN * -100 + '%'});

  //   thatPosition.attr({'tabIndex': '0'});
  //   //속성 값이 0인 경우는 탭을 눌렀을 때 포커스가 가지 않는 엘리먼트에게 포커스를 줄 수 있다. 즉, div와 같은 요소에 탭으로 포커스를 줄 수 있음
  //   thatPosition.focus();
    
  // })



})(jQuery);