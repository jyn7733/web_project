// ex_09_notice.js

(function($){
  $.ajax({
    url : '../data/random_people.json',
    datatype : 'json',
    context : document.body
  }).done(function(data){
    var dataFile = data.sort(function(a,b){//a는 가장 처음 b는 가장 마지막 요소를 지칭하는 임의의 변수
      return b.id - a.id;
    }); //sort로 id 값을 가지고서 순서를 바꿔준다.

    // 1. 순서 뒤집어서 배치
    // 2. 한번에 보일내용을 적당히 줄여서 배치
    // 2-1 인디케이터 생성하여 그 순번에 맞는 내용 나타내기
    // 3. 오름차순, 내림차순 연결해보기

    // console.log( dataFile );
    var noticeCode = '<li><a href="#"><em></em><span></span></a></li>';
    var indiCode = '<li><a href="#"></a></li>';

    var notice = $('.notice_board');
    var noticeCon = notice.children('.context');
    var noticeArea = noticeCon.children('ul');

    var indiCon = notice.children('.indicator');
    var indiArea = indiCon.children('ul');
    
    //기본 세팅
    var myViewLen = 70;  //한번에 보일 갯수

    //인디케이터 생성하기
    var indiLen = Math.ceil(dataFile.length / myViewLen);
    var indiN = 0;
    var indiLi;
    for(; indiN < indiLen; indiN+=1){
      indiArea.append(indiCode);
      indiLi = indiArea.children('li').eq(indiN);
      indiLi.find('a').text(indiN + 1)
    }
    // 내용 넣기
    var reSetting = function(n){
      // var i=0;
      var i=0;
      var k = n || 0;
      var noticeLi;
      noticeArea.empty();
      for(; i < myViewLen; i+=1){
        if(dataFile[i+k] === undefined){
          break;
        }else{
        noticeArea.append(noticeCode);
        noticeLi = noticeArea.children('li').eq(i);
        noticeLi.find('em').text(dataFile[i+k].id);
        noticeLi.find('span').text(dataFile[i+k].email);
        }
      };
    };

    // 기능 수행(차후 인디케이터 기능 포함시키기)
    reSetting();
    

    var indiBtn = indiArea.children('li');

    indiBtn.on('click', function(e){
      e.preventDefault();
      var liN = parseInt($(this).text()) - 1; //문자를 숫자로 인식되게 변환
      var liSetN = liN * myViewLen;
      // console.log(liN)
      reSetting(liSetN);
    })



  
    var select_area = $('.select_area').find('button');
    select_area.on('click', function(e){
      e.preventDefault();
      var i = $(this).index();
      switch(i){
          case 0:
            dataFile =  data.sort(function(a,b){
              return b.id - a.id;
            });
            reSetting();
          break;
          case 1:
            dataFile =  data.sort(function(a,b){
              return a.id - b.id;
            });
            reSetting();
          break;
        }
    });

  });
})(jQuery);