// ex_03_modal.js

(function($){
  var modal01 = $('.modal_01');
  var modalUl = modal01.children('ul');
  var modalLi = modalUl.children('li');

  var galleryBox = $('.gallery_box');
  var close = galleryBox.find('.close');
  var img = galleryBox.find('.img_big');

  var url ="../../img/modal/";

  modalLi.on('click', function(e){
    e.preventDefault();
    var thisBig = $(this).parent('li').attr('data-big');
    galleryBox.stop().fadeIn();

    img.css({backgroundImage : 'url(' + url + thisBig +')'});

  });
  close.on('click', function(e){
    e.preventDefault();
    galleryBox.stop().fadeOut();
  });

})(jQuery);