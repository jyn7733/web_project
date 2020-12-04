// 19tea_main.js

(function($){
//gnb menu area 
  var wrap = $('#wrap');
  var headArea = wrap.children('.head_area');
  var headBox = $('#headBox');
  var gnbBox = headBox.children('#gnbBox');
  var menuBtn = gnbBox.find('.gnb_button');
  var gnbArea = gnbBox.find('.gnb_area');
  var gnbCloes = gnbArea.find('button');
  var gnbMainMenu = gnbBox.find('.gnb_main_menu');
  var gnbMainMenuLi = gnbMainMenu.children('li');
  var gnbSubMenu = gnbMainMenuLi.children('.gnb_sub_menu');
  var gnbSubMenuLi = gnbSubMenu.children('li');

  var win = $(window);
  var sizeWin = win.outerWidth(true);

  if(sizeWin <= 480){
    menuBtn.on('click',['button'],function(e){
      e.preventDefault();
      gnbArea.stop().fadeIn();
      gnbArea.css({'position' : 'fixed'});
      wrap.addClass('wrap_dark');
    });

    gnbCloes.on('click',function(e){
      e.preventDefault();
      gnbArea.stop().fadeOut();
      wrap.removeClass('wrap_dark');
    });
  }else{
    gnbMainMenuLi.on('mouseenter',function(e){
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
  }
//indicator slide banner
var viewBox = $('#viewBox');
var viewArea = viewBox.children('.view_area');
var viewCon = viewArea.children('.view_con');
var viewLi = viewCon.children('li');
var viewIndiArea = viewArea.children('.view_indi_area');
var viewIndi = viewIndiArea.children('.view_indicator');
var viewIndiLi = viewIndi.children('li');

var timed = 2000;
viewIndiLi.children('a').on('click focus',function(e){
  e.preventDefault();
  var it = $(this);
  var itI = it.parent('li').index();
  viewIndiLi.eq(itI).siblings().removeClass('action');
  viewIndiLi.eq(itI).addClass('action'); 
  if(e.type === 'focus'){
    viewCon.stop().animate({marginLeft : -100 * itI + '%'});

  }else if(e.type === 'click'){
    viewCon.stop().animate({marginLeft : -100 * itI + '%'});
  }
});

var i =0;//임의의 변수
var startInterval;
var Start = function(){
  startInterval = setInterval(function(){//함수화 처리
  i+=1;//임의의 변수에 1씩 더함
  viewIndiLi.eq(i).siblings().removeClass('action');//임의의 변수 값에 해당하는 순서 li를 제외한 모든 li에 클래스 제거
  viewIndiLi.eq(i).addClass('action');  
  viewCon.stop().animate({marginLeft : -100 * i + '%'}); 

  if(i > 2){
    i=0;
    viewCon.stop().animate({marginLeft : -100 * i + '%'});
    viewIndiLi.eq(i).siblings().removeClass('action');
    viewIndiLi.eq(i).addClass('action');   
  }
  },timed); 
};
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

//------------------------------------------------------------------------------
//advantagesBox contents button fadeOut
var advantagesBox =$('#advantagesBox');
var advantagesArea = advantagesBox.children('.advantages_area');
var aConNextBtn = advantagesArea.find('button');
var advantagesCon = advantagesArea.children('.advantages_con');
var aConUl = advantagesCon.children('ul');
var aConLi = aConUl.children('li');
var selN = 0;
var timeout = 10;

var selectLiN = function(){ 
  var nn = aConUl.children('.action').index();
  console.log( nn);
  return nn;
};
aConLi.hide();
aConLi.eq(selN).show().addClass('action');
var permission = true;
aConNextBtn.on('click',function(e){
  e.preventDefault();
  if(permission){
    permission = false;
    selN += 1;
    if(selN >=  aConLi.length){
      selN = 0;
    }
    // console.log( selN );
    
    aConLi.eq(selN).stop().show(function(){
      aConLi.eq( selectLiN() ).stop().fadeOut(function(){
        aConLi.removeClass('action');
        aConLi.eq(selN).addClass('action');
        setTimeout(function(){
          permission = true;
        }, timeout);
      });    
    });
  }

  // aConLi.eq(0).fadeToggle(function(){
  //   var aConLiD = aConLi.eq(0).css('z-index');
  //   if(aConLiD === 50){
  //     aConLi.eq(0).addClass('hide');
  //     aConLi.eq(0).siblings().removeClass('hide');
  //   }else if(aConLiD !== 0){
  //     aConLi.eq(0).removeClass('hide');
  //   }
  // })
  });

})(jQuery); 