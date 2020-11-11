// ex_02_slideBtnBanner2.js

(function($){
  var slide = $('.slide_02');
  var slidBtnPart = slide.find('.slide_btn');
  var slideBtn = slidBtnPart.children('button');

  var indexSlide = slide.find('.index_slide');
  var slideLi = indexSlide.find('li');
  var liLen = slideLi.length;
  slideLi.not( $('.action') ).hide();
  /*slideLi.hide();
  indexSlide.find('.action').show();*/
  var indexN=0;
  var permission = true;
  var timed = 500;
  //action 클래스 이름이 몇번째에 있는지 파악하는 기능
  var actionIndex;
  var MyActionIdex = function(){
  var i = 0, actionCheck;
  for(; i<liLen; i+=1){
    actionCheck = slideLi.eq(i).hasClass('action'); // hasClass는 클래스 이름이 있는지 아닌지 알바보는 기능
    if(actionCheck){
      actionIndex = i;
      break;
    }; //if()
  }; //for()
  // console.log(actionIndex);
  return actionIndex;
}; //MyActionIdex ()
// =====================================
  var slideAction  = function(){
    slideLi.eq(indexN).stop().show();
    slideLi.eq(actionIndex).stop().fadeOut(timed/2,function(){
      slideLi.eq(indexN).siblings().removeClass('action');
      slideLi.eq(indexN).addClass('action');

      setTimeout(function(){
        permission = true;}
        ,timed/100
      ); 
    });
  };
// =========================
  slideBtn.on('click',function(e){
    e.preventDefault();
    MyActionIdex(); 
    if(permission){
      permission = false;
      /*
       MyActionIdex(); 여기 안에 위의 for문의 내용이 들어가 있어서 즉 클릭할 때마다 
       li의 위치를 인식할 수 있도록 기능하게 만들어 준다.
      */
      var it = $(this).attr('class');

      if(it === 'next'){
        indexN += 1
        if(indexN >= liLen){
          indexN = 0;
        }
        // slideLi.eq(indexN).show();
        // slideLi.eq(actionIndex).fadeOut(function(){
        //   slideLi.eq(indexN).siblings().removeClass('action');
        //   slideLi.eq(indexN).addClass('action');
        // });
        slideAction();
      }else if(it === 'prev'){
        indexN -= 1
        if(indexN <= -1){
          indexN = liLen -1;
        }
         // slideLi.eq(indexN).show();
        // slideLi.eq(actionIndex).fadeOut(function(){
        //   slideLi.eq(indexN).siblings().removeClass('action');
        //   slideLi.eq(indexN).addClass('action');
        // });
        slideAction();
      }//if( it === prev) end
      console.log(indexN);
    };//if(permission) end
  })//slideBtn.on('click') end

})(jQuery);