// navbox.js
(function($){
  // ==============================
  // navigation 내용을 담을 형식 설정
  var navBox = [
  {'titleNav' : {'tmenu':'story', 'tlink':'http://naver.com','target':'_blank'},
  'subNav' : [{'sname':'몽피이야기', 'slink':'http://google.com'},
              {'sname':'회사소개','slink':'http://google.com'},
              {'sname':'후원' , 'slink':'http://google.com'}] },

  {'titleNav' : {'tmenu':'메뉴', 'tlink':'http://naver.com','target':'_blank'},
  'subNav' : [{'sname':'커피','slink':'http://google.com'},
              {'sname':'기타음료','slink':'http://google.com'},
              {'sname':'음식 및 디저트','slink':'http://google.com'},
              {'sname':'상품','slink':'http://google.com'},
              {'sname':'기타','slink':'http://google.com'}] },

  {'titleNav' :{'tmenu':'store', 'tlink':'http://naver.com','target':'_blank'},
  'subNav' : [{'sname':'신규매장', 'slink':'http://google.com'},
              {'sname':'매장찾기', 'slink':'http://google.com'},
              {'sname':'가맹문의', 'slink':'http://google.com'},
              {'sname':'창업설명회', 'slink':'http://google.com'}] },

  {'titleNav' : {'tmenu':'news', 'tlink':'http://naver.com','target':'_blank'},
  'subNav' : [{'sname':'이벤트','slink':'http://google.com'},
              {'sname':'공지사항','slink':'http://google.com'},
              {'sname':'프로모션','slink':'http://google.com'},
              {'sname':'미디어광고','slink':'http://google.com'}] }

  ];
  // =============================
var navList = '<li><dl><dt></dt><dd></dd></dl></li>'

var navBoxSel =$('#navBox');
var navBoxSelUl = navBoxSel.children('ul');
var navLen = navBox.length;
var navDt, navDd, subNavLen;
var i=0, j;

for(; i<navLen; i+=1){
  //생성 -> 내용작성 -> 삽입 //jQuery에서는 생성과 삽입을 동시에 함
  navBoxSelUl.append(navList);
  navDt = navBoxSelUl.children('li').eq(i).find('dt');
  var tNav = navBox[i].titleNav
  navDt.append('<a href="'+ tNav.tlink +'"'+'target="'+ tNav.target +'">' + tNav.tmenu + '</a>');
  //navDt.append(`<a href="${tNav.tlink}" target="${tNav.target}">${tNav.tmenu}</a>`) //<- 이게 최신방식..???

  navDd = navBoxSelUl.children('li').eq(i).find('dd');
  subNavLen = navBox[i].subNav.length;
  j=0;
  for(; j<subNavLen; j+=1){
    var sNav = navBox[i].subNav[j];
    navDd.append('<a href="'+sNav.slink +'">' +sNav.sname + '</a>');
  }
} //for end

// =================================================
var navBoxFindDd = navBoxSel.find('dd');
var navBoxFindDt = navBoxSel.find('dt');
var navBoxFindDtLink = navBoxFindDt.find('a');
var navBoxFindDdLink = navBoxFindDd.find('a');


var navSlideDown= function(){
  navBoxFindDd.stop().slideDown();
  };
var navSlideuUp =  function(){
  navBoxFindDd.stop().slideUp();
};
navBoxFindDd.hide();
// navBoxSelUl.addEventListener()
// navBoxSelUl.on('mouseenter', navSlideDown);
// navBoxSelUl.on('mouseleave',navSlideuUp);

navBoxFindDtLink.on('focus', navSlideDown)
navBoxSelUl.on({'mouseenter':navSlideDown,
                'mouseleave':navSlideuUp});

navBoxFindDdLink.eq(-1).on('blur',navSlideuUp);

})(jQuery);






/*선택시
js에서는 자식을 선택할 경우에 children() -> jQuery에서도 동일
js에서 자손을 선택할 경우 
*/ 