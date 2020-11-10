// ex_02_slideBtnBanner.js

(function($){
  //console.log( $.fn); //jQurey 연결확인 및 버전 체크
  
  //slide 기능 만들기1
  var slide_01 = $('.slide_01');
  var s_01_btn = slide_01.children('.slide_btn');
  var s_01_button = s_01_btn.children('button');
  s_01_btn.css({'zIndex': 1000});

  var s_01_wrap = slide_01.children('.slide_wrap');
  var s_01_ul = s_01_wrap.find('ul');
  var s_01_li = s_01_ul.children('li')
  
  //마지막 요소 복제하여 앞에 붙임 -> 전체가로값 변경, 내부 li 크기변경
  var cloneLastL_s_01 = s_01_li.eq(-1).clone(true);
  s_01_ul.prepend(cloneLastL_s_01);
  var re_s_01_li = s_01_ul.children('li')
  s_01_ul.css({'width': re_s_01_li.length * 100 + '%', 'position': 'relative', 'left' : '-100%'});
  re_s_01_li.css({'width': 100/re_s_01_li.length + '%'});

  //공통변수
  var slideN = 0;
  var permission = true;
  var timed = 500;
   //버튼 클릭시 해당 요소 파악하기
  //1. 각각의 버튼을 분리하여, 따로따로 처리하는 방법
  /*
  s_01_btn.children('.next').on('click',function(e){
    e.preventDefault();
    if(permission){
        permission = false;
        if(slideN >= s_01_li.length -1){
        slideN = - 1
        s_01_ul.css({marginLeft : slideN * -100 + '%'});
      }
      slideN += 1;
      s_01_ul.stop().animate({marginLeft : slideN * -100 + '%'},function(){
      });
      setTimeout(function(){permission = true},timed);
    }//if(permission)End 
  });
  
  s_01_btn.children('.prev').on('click',function(e){
    e.preventDefault();
    if(permission){
        permission = false;
        slideN -= 1;
        s_01_ul.stop().animate({marginLeft : slideN * -100 + '%'},function(){
        if(slideN <= -1){
          slideN = s_01_li.length - 1; 
          s_01_ul.css({marginLeft : slideN * -100 + '%'});
        }
        setTimeout(function(){permission = true},timed);
      });
    }//if(permission)End
  })
  */
  //2. 동일한 역할을 하는 버튼을 묶어서 그 기능에 따라 처리하도록 하는 방법
  s_01_button.on('click',function(e){
    e.preventDefault();
    // console.log( $(this));
    //var it = $(this)[0]; ->  뒤에 [0] 이렇게 써 있는것은 html 코드 그대로 가져와 볼 수 있게 해준다.
    // var it = $(this).attr('class'); -> 클릭할 경우 해당 요소의 클래스 이름을 보여줌 
    if(permission){
      permission = false;

      var it = $(this);
      var itclass = it.attr('class');

      if(itclass === 'next'){
        // 다음버튼 클릭시
        if(slideN >= s_01_li.length -1){
          slideN = -1;
          s_01_ul.css({marginLeft : slideN * -100 + '%'});
        }
        slideN += 1;
        // s_01_ul.animate({marginLeft : slideN * -100 + '%'},function(){});
      }else if(itclass === 'prev'){
        // 이전버튼 클릭시
        slideN -= 1;
        s_01_ul.animate({marginLeft : slideN * -100 + '%'},function(){
          // if(slideN <= -1){
          //   slideN = s_01_li.length - 1; 
          // };
          // s_01_ul.css({marginLeft : slideN * -100 + '%'});
        });
      };//esle if end
        //통합기능
        s_01_ul.animate({marginLeft : slideN * -100 + '%'},function(){
          if(slideN <= -1){
            slideN = s_01_li.length - 1; 
            s_01_ul.css({marginLeft : slideN * -100 + '%'});
          };
          setTimeout(function(){
            permission = true;
          },timed/5);
        });
    };//if(permission)end
  });

})(jQuery);