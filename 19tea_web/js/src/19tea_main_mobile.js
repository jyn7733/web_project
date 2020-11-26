// 19tea_main_mobile.js
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
  
      menuBtn.on('click',['button'],function(e){
        e.preventDefault();
        gnbArea.stop().fadeIn();
        gnbArea.css({'position' : 'fixed'})
        wrap.addClass('wrap_dark');
      });
  
      gnbCloes.on('click',function(e){
        e.preventDefault();
        gnbArea.stop().fadeOut();
        wrap.removeClass('wrap_dark');
      });
 

  //indicator slide banner
  var viewBox = $('#viewBox');
  var viewArea = viewBox.children('.view_area');
  var viewCon = viewArea.children('.view_con');
  var viewLi = viewCon.children('li');
  var viewIndiArea = viewArea.children('.view_indi_area')
  var viewIndi = viewIndiArea.children('.view_indicator');
  var viewIndiLi = viewIndi.children('li');
  
  var timed = 3000;
  viewIndiLi.children('a').on('click focus',function(e){
    e.preventDefault();
    var it = $(this);
    var itI = it.parent('li').index();
    viewIndiLi.eq(itI).siblings().removeClass('action');
    viewIndiLi.eq(itI).addClass('action'); 
    if(e.type === 'focus'){
      viewCon.stop().animate({marginLeft : -100 * itI + '%'});
    // setTimeout(function(){viewCon.stop().animate({marginLeft : -100 * itI + '%'})},timed); 
  
    }else if(e.type === 'click'){
      viewCon.stop().animate({marginLeft : -100 * itI + '%'});
      // setTimeout(function(){viewCon.stop().animate({marginLeft : -100 * itI + '%'})},timed); 
    }
  })
  
  var i =0;
  var startInterval;
  var Start = function(){
    startInterval = setInterval(function(){
    i+=1;
    viewIndiLi.eq(i).siblings().removeClass('action');
    viewIndiLi.eq(i).addClass('action');  
    viewCon.stop().animate({marginLeft : -100 * i + '%'}); 
  
    if(i > 2){
      i=0;
      viewCon.stop().animate({marginLeft : -100 * i + '%'});
      viewIndiLi.eq(i).siblings().removeClass('action');
      viewIndiLi.eq(i).addClass('action');   
    }
    },timed); 
  }
  Start();
  
  var StopSlide = function(){
    clearInterval(startInterval);
  };
  
  //viewBox 에서 마우스가 머물거나 벗어났을 때 처리
  // viewBox.on('mouseenter', function(){
  //   clearInterval(startInterval);
  //   StopSlide();
  // });
  
  // viewBox.on('mouseleave', function(){
  //   Start();
  // });
  
  //위의 처리 내용을 객체화 하여 처리
  viewBox.on({
    'mouseenter': StopSlide,
    'mouseleave': Start
  });
  
  })(jQuery); 