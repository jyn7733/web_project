//filename

(function($){
//jQuery start
/**to do list
 * 카드 js에서 구현하기
 * json파일 생성해서 불러오기/이미지 리스트 처리
 * 생성된 ul의 가로 크기를 li의 갯수만큼 담을 수 있도록 수정
 */

  //실제 데이터형식에서는
  // [
  //   {'title' : '카드 제목', 'content' : '카드내용', 'imgSrc' : 'random_001.jpg', 'imgAlt':'이미지설명'},
  //   {'title' : '카드 제목', 'content' : '카드내용', 'imgSrc' : 'random_001.jpg', 'imgAlt':'이미지설명'},
  //   {'title' : '카드 제목', 'content' : '카드내용', 'imgSrc' : 'random_001.jpg', 'imgAlt':'이미지설명'},
  //   {'title' : '카드 제목', 'content' : '카드내용', 'imgSrc' : 'random_001.jpg', 'imgAlt':'이미지설명'}
  // ];

  var cardData = [];
  var k = 0, l;
  var url = "../img/ramdom/"
  var imgT = 'random_'
  for(; k < 30; k++){
    if(k < 9){
      l = '00'+ (k+1); // 8 -> 009
    }else if(k < 99){
      l = '0'+(k+1); // 9 -> 010
    }
    cardData[k]= {};
    cardData[k].title = 'title' + l ;
    cardData[k].imgSrc = imgT + l + '.jpg';
    cardData[k].imgAlt = imgT + l + '이미지설명';

  }
  console.log(cardData);

  var win = $(window)
  var cardBox = $('#cardBox');
  
  cardBox.append('<ul></ul');
  var cardUl = cardBox.children('ul');
  var liText ='<li>\
  <a href="#">\
    <div class="img_temp">\
      <img src="" alt="">\
    </div>\
    <span></span>\
  </a>\
</li>'
// cardUl.append(liText);

var i =0;
var listEl;
for(; i< 30; i++){
  cardUl.append(liText)
  listEl =  cardUl.children('li').eq(i);
  listEl.find('img').attr({'src':url +cardData[i].imgSrc, 'alt': cardData[i].imgAlt})

  listEl.find('span').text(cardData[i].title)
  listEl.find('a').attr({'href':'#'})
}

var cardLi = cardUl.children('li');


// ul의 크기 설정
// 1. li의 가로크기, li의 마진값(공백)
// 2. 브라우저에서의 기준 크기값

var cardLiW = cardLi.eq(0).outerWidth(); // 마진 값을 제외한(패팅,보더 포함) 가로 값 (true)까지 써있으면 마진값 포함
var cardMargin = cardLi.eq(0).outerWidth(true) - cardLiW;

/**여기서부터 브라우저 크기가 변경되면 다시 수행!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! - 함수처리 */
var BrowserSet = function(){
    cardLi.removeAttr('style');//함수가 재수행하면 li의 style속성으로 제거
    var winW = win.outerWidth();
    var liLen = parseInt( winW / (cardLiW + cardMargin));
    //정수화 처리 : parseInt()
    // 버림, 올림, 반올림 : Math.floor(), Math.ceil(), Math.round()
    // console.log(liLen);

    var UlWindth = ((cardLiW + cardMargin )* liLen)- cardMargin;
    cardUl.css({width : UlWindth  + 'px'})

    // li설정
    //1. li의 순번에서 가로 행에 들어가는 마지막번째에는 마진 제거
    //2. 각각의 행에 들어가는 모든 마지막 위치의 갯수번째의 margin제거

    cardLi.eq(liLen-1).css({margin:0});

    // console.log(UlWindth, liLen );
    var lin = 0;
    var liNth = Math.ceil(cardLi.length / liLen);
    var n;
    for(; lin < liNth; lin++){
      n = (liLen * lin) -1;
      cardLi.eq(n).css({margin:0});
    };
    //가로에 4개씩에서 4번쨰ㅖ (ea(4*n-1))마다 마진값 x -> 3, 7, 11, 15....
    //가로에 6개씩에서 6번쨰ㅖ (ea(6*n-1))마다 마진값 x -> 5,11,17....
    //브라우저 크기가 변경될때마다 재측정
};//BrowserSet();
BrowserSet();

win.on('resize',function(){
  BrowserSet();
})

})(jQuery);
//jQuery end
// ../img/ramdom/ramdom_01.jpg
//Lorem ipsum dolor sit, amet consectetur adipisicing elit.