// ex_06_rwd_menu.js

(function($){

  var winSize = deviceSize();
  var deviceType = ['mobile', 'tablet', 'laptop', 'pc', 'pcfull'];

  var headBox = $('#headBox');
  var menuBtn = $('.menu_btn');

  if(winSize === 'mobile' || winSize === 'tablet'){
    headBox.append('<script src="../js/src/rwd_menu_mobile.js"></script>');
  }else{
    menuBtn.remove();
  }
})(jQuery);