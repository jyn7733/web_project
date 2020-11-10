// q_02_silde.js

(function($){
    var miniProduct = $('#miniProduct');
    var productImg = miniProduct.find('.product');
    var productImgLi = productImg.find('li');
    var permission = true;
    
    var productListLast = productImgLi.eq(-1).clone();
    productImg.prepend(productListLast);
    var reproductLi = productImg.find('li')
    productImg.css({marginLeft : -100 + '%','width' : reproductLi.length * 100 + '%'})
    reproductLi.css({'width' : (100 / reproductLi.length) + '%'})
    
    var nextSlideBtn = miniProduct.find('.next')
    var prevSlideBtn = miniProduct.find('.prev')

   
    
    var slideN = 0;
    nextSlideBtn.on('click', function(e){
      e.preventDefault();
      if(permission){
        permission= false;
        slideN += 1;
        productImg.stop().animate({'left': slideN * -100 + '%'},function(){
        if(slideN >= productImgLi.length-1){
          slideN = -1;
          productImg.stop().css({'left': slideN * -100 + '%'});
          };
          setTimeout(function(){ permission = true;},100);
         });
        }
    
      });
    prevSlideBtn.on('click', function(e){
      e.preventDefault();
      if(permission){
        permission= false;
        slideN -= 1;
        productImg.stop().animate({'left': slideN * -100 + '%'},function(){
        if(slideN <= -1){
          slideN = productImgLi.length-1;
          productImg.stop().css({'left': slideN * -100 + '%'});
          };
          setTimeout(function(){ permission = true;},100);
         });
        }
    });
})(jQuery);