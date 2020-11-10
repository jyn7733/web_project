// q_01_indicator.js
(function($){
  var miniProduct = $('#miniProduct')
  var indicator = $('.indicator');
  var indicatorLi = indicator.find('li');
  var productImg = miniProduct.find('.product_image');

  indicatorLi.on('click',function(e){
    e.preventDefault();
    var indiIt = $(this);
    var indiN = indiIt.index();
    // console.log(indiN);
    productImg.stop().animate({'left': indiN * -100 + '%'});
    indicatorLi.eq(indiN).siblings().removeClass('action');
    indicatorLi.eq(indiN).addClass('action');
  });

})(jQuery);
