// q_02_silde.js

(function($){
  var miniProduct = $('#miniProduct');
  var slideBtn = miniProduct.find('.slide_btn');
  var productWrap = miniProduct.find('.product_wrap');
  var productImg = productWrap.find('.product');
  var productLi = productImg.children('li');

  var nextBtn = slideBtn.children('button').eq(0);
  var prevBtn = slideBtn.children('button').eq(1);

  var permission = true;
  var timed = 2000;
  var slideN = 0;

  var productLiLast = productLi.eq(-1).clone();
  productImg.prepend(productLiLast);
  var reproductLi = productImg.find('li');
  productImg.css({'marginLeft': -100 + '%', 'width' : reproductLi.length * 100 + '%'});
  reproductLi.css({'width' : (100 / reproductLi.length) + '%'})

  nextBtn.on('click',function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      slideN += 1;
      productImg.stop().animate({'marginLeft':slideN * -100 + '%' },function(){
        if(slideN >= productLi.lenght - 1){
          slideN = -1
         productImg.stop().css({'left': slideN * -100 + '%'});
        };
        setTimeout(function(){permission = true;},200);
      });
    };
  });

 prevBtn.on('click',function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    slideN -= 1;
    productImg.stop().animate({'marginLeft':slideN * -100 + '%' },function(){
      if(slideN <= - 1){
        slideN = productLi.length - 1
       productImg.stop().css({'left': slideN * -100 + '%'});
      };
      setTimeout(function(){permission = true;},200);
    });
  };
 });

 var myslideGo
 var SlideGo = function(){
  myslideGo = setInterval(function(){
    slideN += 1;
    productImg.stop().animate({'marginLeft':slideN * -100 + '%' },function(){
      if(slideN >= productLi.lenght - 1){
        slideN = -1
       productImg.stop().css({'left': slideN * -100 + '%'});
      };
      setTimeout(function(){permission = true;},200);
    });
   },timed);
 };
 SlideGo();
 
 var stopSlide = function(){
   clearInterval(myslideGo);
 };

 miniProduct.on({
  'mouseenter': stopSlide,
  'mouseleave': SlideGo
});

})(jQuery);