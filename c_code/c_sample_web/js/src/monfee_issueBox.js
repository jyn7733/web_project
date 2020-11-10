// monfee_issueBox.js
(function(){
  var issueBox = $('#issueBox');
  var issueText = issueBox.find('.issue_text');
  var issueIndicator = issueText.find('.issue_indicator');
  // 버튼영역
  var issueBtn = issueIndicator.find('.auto_slide_btn');
  var autoPlay = issueBtn.children('.auto_play');
  var autoPause = issueBtn.children('.auto_pause');

  //인디케이터 영역
  var issueIndiUl = issueIndicator.find('.check_indi');
  var issueIndiLi = issueIndiUl.find('li');
  
  //내용영역
  var issueTextArea = issueText.find('.issue_text_area');
  var issueUl = issueTextArea.find('ul');
  var issueLi = issueUl.find('li');
  var permission = true;
  var timed = 500;
  var issueLiLen = issueLi.length;
  var itIndex = 0;

  //함수 수행기능
  var SlideFn = function(itIndex){
    issueUl.stop().animate({'marginLeft': itIndex * -100 + '%'}, timed, function(){
      issueIndiLi.eq(itIndex).addClass('action');
      issueIndiLi.eq(itIndex).siblings().removeClass('action');

      setTimeout(function(){
        permission = true;
      },timed/2);
    });
  };

  //-------------------------------------------------
  //인디케이터 List를 클릭시 각 내용으로 위치 이동
  issueIndiLi.on('click',['a'],function(e){
    e.preventDefault();
    if(permission){
      permission = false;
      itIndex = $(this).index();
      SlideFn(itIndex);
    };
  });

  //-------------------------------------------------
  //2. 자동 슬라이드 처리
  var mySlideGo;
  var SlideGoFn = function(){
    mySlideGo = setInterval(function(){
      autoPlay.addClass('action');
      autoPause.removeClass('action');

      itIndex += 1;
      if(itIndex > issueLiLen-1){
        itIndex = 0;     
      };
      SlideFn(itIndex);
    },timed * 3)
  };
  var SlideStopFn = function(){
    clearInterval(mySlideGo);
    autoPause.addClass('action');
    autoPlay.removeClass('action');
  };
  SlideGoFn();

  autoPause.on('click',function(e){
    e.preventDefault();
    SlideStopFn();
  });
  autoPlay.on('click',function(e){
    e.preventDefault();
    SlideGoFn();
  });
})(jQuery);