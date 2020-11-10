// jq_01_selector.js
// $(document).ready(function(){});
// $(function(){});


(function($){
  var idBox = $('#box');
  idBox.animate({
    'width':100 + 'px', 
    'height':100 + 'px', 
    'backgroundColor':'#fa0'});

  var boxTwo = $('.box_two');
  boxTwo.css('width', 300 + 'px');  
  boxTwo.css('height', 50 + 'px');  
  boxTwo.css('border', 3 + 'px solid #0cf');  
  // boxTwo.css({'width': 300 + 'px', 'height': 50 + 'px',' boder': 3 + 'px' + ' solid ' + ' #0cf'});  

  var listThree = $('.list_three');
  var listLi = listThree.children('li');
  listLi.css({'backgroundColor': '#fac', 'marginBottom' : '5px', 'width' : 200 + 'px'});

  listThree.children('li:nth-child(1)').css({'color' : '#03f', 'fontWeight' : 'bold'});
  listThree.children('li:nth-of-type(2)').css({'color' : '#f30', 'fontWeight' : 'bold'});
  listThree.children('li:nth(2)').css({'color' : '#330', 'fontSize': 1.3 + 'rem'});
  listThree.children('li').eq(3).css({'color' : '#fff', 'fontSize': 1.3 + 'rem'});

  var listOl = listThree.find('ol');
  listOl.css({'border': '5px solid #777', 'padding' : '10px'});
  
  var style = $('style');
  style.append('#wrap{width:800px; background-color:#ddd; margin:auto;}');
  style.append('#wrap::after{content:"글씨를 작성해보아요!";}');

  var p2List = $('.part_2_list');
  var p2Li = p2List.children('li');
  p2List.css({'listStyle':'none'})
  p2Li.css({'width':100+'px', 'height': 20+'px', 'marginBottom': 5+'px', 'backgroundColor':'#fff' });
  p2Li.eq(4).css({'color':'#07f', 'fontWeight':'bold'})
  p2Li.eq(4).prev().css({'textAlign': 'right'})
  p2Li.eq(4).prevAll().css({'borderRadius': '20px', 'boxShadow':'5px 5px 5px #555'})
  p2Li.eq(-5).css({'fontWeight':'bold', 'color':'#f07'});
  p2Li.eq(-5).next().css({'backgroundColor':'#f07'});
  p2Li.eq(-5).next().nextAll().css({'boxShadow':'5px 5px 0 #f07 inset'});

  p2Li.eq(10).parents('#wrap').css({'border':'1px dotted #171717'});
  p2Li.eq(10).parentsUntil('#wrap').css({'outline':'5px solid rgba(51,51,255,0.3)'}); 
  //p2Li.eq(10).parentsUntil('#wrap').css({'~~~~~'}); 이렇게 쓰여있으면 #wrap을 제외한 그밑의 부모들.
  p2Li.eq(10).parent().css({'border':'1px dotted #57a'});
    //당신의 부모의 부모의 형제 중에 첫째에게 사과를 주세요
    //==> li.parent().parent().siblings().eq(0)
  p2Li.parent().parent().siblings('h1').css({'backgroundColor':'#cfc', 'padding':'10px', 'marginBottom':'10px'})

    var evt = $('.evt');
    var evtLi = evt.children('li');

    evtLi.eq(0).on('click',function(e){
      e.preventDefault();
      evtLi.css({'backgroundColor' : '#aa7'});
    })
    evtLi.eq(1).on('mouseenter',function(e){
      e.preventDefault();
      evtLi.css({'backgroundColor' : 'transparent'});
    })
    evtLi.on('click', function(e){
      e.preventDefault();
      //선택한 그것. 을 제외한 나머지에 적용
      $(this).css({'border':'0'});
      $(this).siblings().css({'boderBottom':'5px solid #333'});
      var thisI = $(this).index();

      //eq() - 순서를 직접 언급
      //index() - 순서를 확인 
    })
})(jQuery);


/*
click, dbclick, mousedown, mouseup, mousemove,
mouseenter, mouseleave, mouseover, moseout,
keypress, keydown, keyup,
focus, blur,
touchstart, touchhend, touchmove,
scroll, resize ... 등 다양한 이벤트 종류.
*/

/** 
 * nth-child,nth-of-type은 css에 있는 개념이기 때문에 순서대로 인식 즉, 1이 첫번 째 요소.
 * nth만 사용하면 css에는 없는 기능이기때문에 순서를 자바스크립트(jQuery)와 같이 첫번 째 요소는 0부터 시작한다.
*/