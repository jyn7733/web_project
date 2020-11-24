// ex_07_mousewheel.js

(function($){
  var web = $('html,body');
  var wrap = $('#wrap');
  var permission = true;
  var count = 0;
  var pageOffset = [];
  var pageRoll = $('.page_roll')
  var i=0;
  for(; i<pageRoll.length; i+=1){
    pageOffset[i] = pageRoll.eq(i).offset().top;
  }
  // console.log(pageOffset);

  web.animate({scrollTop:0});
  //web.scrollTop(0);

  wrap.on('mousewheel DOMMouseScroll',function(e){ //DOMMouseScroll 파이어폭스에선 해당 명령어를 써야함
    e.preventDefault();
    if(permission){
      permission=false;
    //마우스 휠의 수치값(움직임)을 확인

    //-파이어폭스 외의 브라우저 확인
    // console.log(e.originalEvent.wheelDelta);

    // console.log(e.originalEvent.detail);
    //-파이어폭스 확인

    var eOriginal = e.originalEvent;
    //수치값을 가질 수 있는지 여부확인(반대성향으로 처리)
    //console.log( !eOriginal.wheelDelta); //수치값이 있는 아이들은 false 없는 아이들은 true
    var mWheel;
    if(!eOriginal.wheelDelta){
      //파이어폭스 브라우저에서 처리
      mWheel = eOriginal.detail * -40; // 3 || -3
    }else{
      //firefox 이외의 브라우저
      mWheel = eOriginal.wheelDelta // -120 || 120
    }
    // console.log(mWheel)

    if(mWheel < 0 && count < pageOffset.length-1){//휠을 아래로 스크롤시 //
      count += 1;
    }else if(mWheel > 0 && count > 0){//휠을 위로 스크롤시
      count -= 1;
    }
    // console.log(count, ':', pageOffset[count])
    web.animate({scrollTop : pageOffset[count] + 'px'},function(){
      setTimeout(function(){
        permission=true;
      },100)
    });

    } //if(permission)
  });  
  //--------------------------
   //터치마우스 또는 노트북에있는 터치패드, 트랙패트....
    //경우는 수치가 일정하지 않음 -> if문으로 처리
})(jQuery);