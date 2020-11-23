// rwd_menu_mobile.js

var headBox = $('#headBox');
var menuBtn = headBox.find('.menu_btn');
var gnb = headBox.find('.gnb');


menuBtn.on('click', ['button'],function(e){
  e.preventDefault();

  var gnbStatus = gnb.css('display');

if(gnbStatus === 'none'){
  gnb.stop().fadeIn();
  menuBtn.addClass('on');
}else{
  gnb.stop().fadeOut();
  menuBtn.removeClass('on')
};
});