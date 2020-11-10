// jq_02_showHide.js
(function($){
  var box = $('.box');
  var boxPar = box.children('p');
  boxPar.css({'borderRadius': '1rem'});
  var timed =  1000;
  var part = $('.part');
  var partUl = part.children('ul');
  var showHide = partUl.children('.show_hide');
  var fade = partUl.children('.fade');
  var slide = partUl.children('.slide');
  var className = partUl.children('.class_name');
  var other = partUl.children('.other');

  //show-hide
  var shBtn = showHide.children('button');
  shBtn.eq(0).on('click',function(e){
    e.preventDefault();
    boxPar.show(timed);
  })

  shBtn.eq(1).on('click',function(e){
    e.preventDefault();
    boxPar.hide(timed);
  })

  shBtn.eq(2).on('click',function(e){
    e.preventDefault();
    boxPar.toggle(timed);
  })

//fade
var fadeBtn = fade.children('button');
fadeBtn.eq(0).on('click',function(e){
  e.preventDefault();
  boxPar.fadeIn();
})
fadeBtn.eq(1).on('click',function(e){
  e.preventDefault();
  boxPar.fadeOut();
})
fadeBtn.eq(2).on('click',function(e){
  e.preventDefault();
  boxPar.fadeToggle();
})

//slide
var slideBtn = slide.children('button');
slideBtn.eq(0).on('click',function(e){
  e.preventDefault();
  boxPar.slideDown();
})
slideBtn.eq(1).on('click',function(e){
  e.preventDefault();
  boxPar.slideUp();
})
slideBtn.eq(2).on('click',function(e){
  e.preventDefault();
  boxPar.slideToggle();
})

//class name
var cnBtn = className.children('button');
cnBtn.eq(0).on('click',function(e){
  e.preventDefault();
  boxPar.addClass('love');
})
cnBtn.eq(1).on('click',function(e){
  e.preventDefault();
  boxPar.removeClass('love');
})
cnBtn.eq(2).on('click',function(e){
  e.preventDefault();
  boxPar.toggleClass('love');
})

})(jQuery);