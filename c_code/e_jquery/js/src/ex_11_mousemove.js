//filename

(function($){
//jQuery start
  var wrap = $('#wrap');
  var ch = wrap.find('.character');
  
  wrap.on('mouseenter',function(){
    ch.show();
  })
  wrap.on('mouseleave',function(){
    ch.hide();
  })
  wrap.on('mousemove',function(e){
  e.preventDefault();
  
  var eOrigin = e.originalEvent;

  // 가로, 세로값 확인
  var w = $(this).outerWidth()/2;
  var h = $(this).outerHeight()/2;

  //지정문서의 떨어진 곳 파악
  var ofX = $(this).offset().left;
  var ofY = $(this).offset().top;


  // x,y 값 확인
  // offsetX 값을 사용하면, 내부요소와 겹침현상이 발생시 위치값이 변경되므로,
  // 열려있는 문서의 위치를 기준으로 좌표를 생성, 그러므로 offset()메서드가 필요 
  var x = eOrigin.pageX;
  var y = eOrigin.pageY;

  // console.log(w - (x - ofX),h - (y - ofY));

  // ch.css({top : (y+10) + 'px', left : ( x+10) + 'px'});
  
  var setX = w - (x - ofX)
  var setY = h - (y - ofY)

  ch.css({'transform' : 'translate('+ setX/10 +'px, '+ setY/10 +'px)'});


  })

})(jQuery);
//jQuery end
