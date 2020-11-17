// ex_03_modal.js

(function($){

  var data  = [
      {"title":"juice_01",
      "thumImg":"juice_small_01.jpg",
      "bigImg":"juice_big_01.jpg",
      "content":"이미지에 대한 설명 01 lorem2"
    },
      {"title":"juice_02",
      "thumImg":"juice_small_02.jpg",
      "bigImg":"juice_big_02.jpg",
      "content":"이미지에 대한 설명 02 lorem5"
    },
      {"title":"juice_03",
      "thumImg":"juice_small_03.jpg",
      "bigImg":"juice_big_03.jpg",
      "content":"이미지에 대한 설명 03 lorem10"
    },
      {"title":"juice_04",
      "thumImg":"juice_small_04.jpg",
      "bigImg":"juice_big_04.jpg",
      "content":"이미지에 대한 설명 04 lorem3"
    },
  ];

  var url ="../../img/modal/";
// -------------------------------
  var modalIncode = '<li><button type="button"><span></span></button></li>';
  var galleryCode = '<div class="gallery_box"><div class="gallery_area"><div class="close"><button type="button"><span></span></button></div><div class="big_img"><p></p></div></div></div>';


// ---------------------------------
  var modal01 = $('.modal_01');
    // modal01.appned(galleryCode); //내부의 뒤에

  var modalUl = modal01.children('ul');
  modalUl.empty; //내부를 비우는 것

  var temLi;
  var i = 0;
  for(; i<data.length; i+=1){
    modalUl.append(modalIncode);
    temLi = modalUl.children('li').eq(-1); 
    //(-1)은 첫번째 이전번째 요소를 뜻
    //for문에서 요소가 생성될 때마다 끝에 있는 요소를 가르키게 하는 것. 
    // temLi.attr({'data-big':data[i].bigImg, 'data-narr': data[i].content});

    // temLi.attr({'data-big':data[i].bigImg, 'data-narr':data[i].content});

    modalBtn = temLi.find('button');
    modalBtn.css({
      backgroundImage:'url('+ url + data[i].thumImg +')', 
      textTransform:'uppercase'
    });
    modalBtn.children('span').text( data[i].title );

  
  };

  var modalLi = modal01.find('li');
  var mLiBtn = modalLi.find('button');

  var galleryBox,close,img,galleryP

  var timed = 500;
  var indexChdek;
  //focus가 눌렀던 요소로 다시 잡히게 하기 위해 밖에서 순서를 잡아 줄 수 있도록 언급한다.
  mLiBtn.on('click', function(e){
    e.preventDefault();
    var it = $(this).parent('li');
    var itI = it.index();
    indexChdek = itI;

    // var thisBig = it.attr('data-big');
    // var thisNarr = it.attr('data-narr');
    
    // img.css({backgroundImage: 'url(' + url + data[i].bigImg +')'});
    // galleryP.text(data[i].content);

    // -----------------------------------
    modal01.after(galleryCode); //해당 요소(선택자)의 바로 뒤에
    
    galleryBox = $('.gallery_box');
    close = galleryBox.find('.close');
    img = galleryBox.find('.big_img');
    galleryP = galleryBox.find('p');
    // ---------------------------//요소 선언

    img.css({backgroundImage: 'url(' + url + data[indexChdek].bigImg +')'});
    galleryP.text(data[indexChdek].content);
    // ---------------------------//요소에 추가 요소 넣은 것

    galleryBox.stop().fadeIn(function(){
      close.children('button').focus();
      setTimeout(function(){
      galleryP.addClass('action');
    },timed)

    });
    close.on('click', function(e){
      e.preventDefault();
      galleryBox.stop().fadeOut();
      modalLi.eq(indexChdek).find('button').focus();
      galleryP.removeClass('action');
      galleryBox.remove(); //해당 요소 자체를 지우는 것
      //닫기를 누르면 galleryBox요소 자체가 사라져 있고 다시 li를 누르면 생성된다.
    }); 
  });

})(jQuery);