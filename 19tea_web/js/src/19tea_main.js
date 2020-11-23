// 19tea_main.js

(function($){
//gnb menu area 
  var wrap = $('#wrap');
  var headBox = $('#headBox');
  var gnbBox = headBox.children('#gnbBox');
  var menuBtn = gnbBox.find('.gnb_button');
  var gnbArea = gnbBox.find('.gnb_area')
  var gnbCloes = gnbArea.find('button');
  var gnbMainMenu = gnbBox.find('.gnb_main_menu');
  var gnbMainMenuLi = gnbMainMenu.children('li');
  var gnbSubMenu = gnbMainMenuLi.children('.gnb_sub_menu');
  var gnbSubMenuLi = gnbSubMenu.children('li');

  var win = $(window);
  var sizeWin = win.outerWidth(true);

  console.log(sizeWin);
  if(sizeWin <= 480){
    menuBtn.on('click',['button'],function(e){
      e.preventDefault();
      gnbArea.show();
      gnbArea.css({'position' : 'fixed'})
      wrap.addClass('wrap_dark');
    });

    gnbCloes.on('click',function(e){
      e.preventDefault();
      gnbArea.remove();
      wrap.removeClass('wrap_dark');
    });
  }else{
    gnbMainMenuLi.on('click',['a'],function(e){
      e.preventDefault();
      var it = $(this);
      var itI = it.index();
      gnbSubMenu.eq(itI).fadeIn();
      gnbMainMenuLi.eq(itI).addClass('action');
      gnbMainMenuLi.eq(itI).siblings().removeClass('action');
    });
    gnbSubMenu.on('mouseleave',function(e){
      e.preventDefault();
      gnbSubMenu.fadeOut();
      gnbMainMenuLi.removeClass('action');
    });
  };
//indicator slide banner
var viewBox = $('#viewBox');
var viewArea = viewBox.children('.view_area');
var viewCon = viewArea.children('.view_con');
var viewIndi = viewArea.children('.view_indicator');
var viewIndiLi = viewIndi.children('li');

viewIndiLi.on('click',['a'],function(e){
  var it = $(this);
  var itI = it.index();
  viewCon.animate({marginLeft : -100 * itI + '%'});
  viewIndiLi.eq(itI).siblings().removeClass('action');
  viewIndiLi.eq(itI).addClass('action'); 
})

//advantagesBox contents button fadeOut



})(jQuery);