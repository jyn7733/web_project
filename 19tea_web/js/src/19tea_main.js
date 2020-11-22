// 19tea_main.js

(function($){
  var headBox = $('#headBox');
  var gnbBox = headBox.children('#gnbBox');
  var gnbMainMenu = gnbBox.find('.gnb_main_menu');
  var gnbMainMenuLi = gnbMainMenu.children('li');
  var gnbSubMenu = gnbMainMenuLi.children('.gnb_sub_menu');
  var gnbSubMenuLi = gnbSubMenu.children('li');

  
  gnbMainMenuLi.on('click',['a'],function(e){
    e.preventDefault();
    var it = $(this);
    var itI = it.index();
    gnbSubMenu.eq(itI).fadeIn();
    gnbMainMenuLi.eq(itI).addClass('action');
    gnbMainMenuLi.eq(itI).siblings().removeClass('action');
  })
  gnbBox.on('mouseleave',['a'],function(e){
    e.preventDefault();
    gnbSubMenu.fadeOut();

  })
})(jQuery);