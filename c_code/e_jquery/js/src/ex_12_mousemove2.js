//ex_12_mousemove2

(function($){
//jQuery start
  var part = $('.part');
  var partOffsetX = part.offset().left;
  var partW = part.width();
  var per = 250;

  //.part 내부에 img생성하고 주소값을 연결
  i= 0;
  var fn = '../img/move/move_img_';
  var k;
  for(; i < per; i++){
    if(i < 9){
      k = '00'+(i+1); 
    }else if(i < 99){
      k = '0' + (i+1);
    }else{
      k = (i+1);
    }
    part.append('<img src="'+ fn + k +'.png" art="마우스를 움직일 경우 나타나는 이미지">' );
  }
  var partImg = part.children('img');
  partImg.hide()
  partImg.eq(0).show()

  part.on('mousemove', function(e){
    var x = e.originalEvent.pageX;
    var myX = x - partOffsetX;
    var mySetPer = parseInt(myX / partW * per);
     console.log(mySetPer)
    // console.log(myX)
    partImg.eq(mySetPer).show();
    partImg.eq(mySetPer).siblings('img').hide();
  });


})(jQuery);
//jQuery end
