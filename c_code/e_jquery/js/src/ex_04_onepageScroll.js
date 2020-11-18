//ex_04_onepageScroll.JS 

(function($){
  //jQuery start
  /**
   * 1. 스크롤시$('#headBox') 상단고정
   * 1-1 상단이동버튼 기능추가
   * 2. $('.popup_dp')의 닫기버튼 클릭시 팝업창 삭제
   */

  /**1번 사용시 : offset().top, scrollTop, on('scroll'), $(window)
   * 
   */

   var win = $(window);
   var headBox = $('#headBox');
   var topBtn = $('.top_move_btn')
   // 브라우저 상단에서 떨어져있는 양 체크
  var headOffset = $(headBox).offset().top
  // console.log(headOffset);

  //1-1번 보이지 않았다가 500px 이동후에 나타나기
  topBtn.hide();
  
  win.on('scroll',function(e){
      //스크롤이 이동한 위치값 확인
     var winSt = win.scrollTop();
    //  console.log(winSt);

    if(headOffset <= winSt){
      headBox.css({'position' :'fixed', 'top':0, 'z-index' : 1500});
    }else{
      headBox.removeAttr('style');
    };

    // if(winSt >= 700){
    //   topBtn.stop().fadeIn();
    // }else{
    //   topBtn.stop().fadeOut();
    // };

    (winSt >= 500) ? topBtn.stop().fadeIn() : topBtn.stop().fadeOut() ;
    //위의 if문과 같게 적용된다. '(조건) ? 참 : 거짓;' 의 구조(삼항연산자) 

  });//win.on('scroll')
// ---------------------------------------
// 2번 기능
  var popupDp = $('.popup_dp');
  var popupBtn = popupDp.find('button');
  popupBtn.on('click',function(e){
    e.preventDefault();
    popupDp.remove();
  });
//-------------------------------------
var navBox = $('#navBox');
var navUl = navBox.find('ul')
var navLi = navUl.find('li')

var liScrollMove = function(e){
  e.preventDefault();
  var it = $(this).find('a');
  
  //a요소의 연결된 선택자 파악
  var itAttr = it.attr('href') //속성값 찾아오기

  //a요소의 href값이 상단에서 떨어져있는 양 체크
  var itOffset = $(itAttr).offset().top //offset은 top과 ?

  //브라우저를 이동시켜라(스크롤) -> itoffset으로 파악된 크기만큼
  $('html, body').animate({ scrollTop : itOffset }); 
  //상황에 따라서 html,body가 스크롤 되어야 하는 때가 있다. 웬만한 상황에선 이렇게 작성하면 모두 적용됨
} 
/* 링크 클릭시 스크롤로 이동시키는 기능을 함수화 시킨 것 */
  
//-----------------------------------------
  topBtn.on('click',['a'], liScrollMove); //topBtn.on('click')
// -------------------------------------
//nav에 있는 각 메뉴들이 scroll이 움직이도록 바꾸기 
  navLi.on('click',['a'],liScrollMove);

  // 배열.forEach(function(배열요소각각, 해당배열요소순서){})
  // $.each(배열, function(배열요소순서, 순서에맞는배열요소각각){})
  var btnCollection = [topBtn,navLi]
  $.each([topBtn,navLi],function(i, btn){
    btn.on('click',['a'],liScrollMove);
  })

  // -----------------------------------------
  //3. tab_menu
  var tabLi  = $('.tab_li ul li');
  var tabCon = $('.tab_content div');

  tabLi.on('click',function(e){
    e.preventDefault();
    var it = $(this);
    var itI = it.index();

    tabCon.eq(itI).show();
    tabCon.eq(itI).siblings().hide();

  });

  //-------------------------------------
  var titleTab = $('.title_tab_style');
  var titleTabDl = titleTab.find('dl');
  var tabDt = titleTabDl.find('dt');
  var tabDd = titleTabDl.find('dd');
  
  tabDt.eq(0).addClass('action');
  tabDt.on('click',['a'],function(e){
    e.preventDefault();
    var it = $(this);

    it.siblings('dt').removeClass('action');
    it.addClass('action');

    tabDd.hide();
    it.next('dd').show()
  });



})(jQuery);
//jQuery end
