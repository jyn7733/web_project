// monfee_main_module.js

// $(document).ready(function(){/*jQuery */});  => 시험볼 때 해당 방식으로 실행
// $(function(){/*jQuery*/});

(function($){
    //jQuery
  var headBox = $('#headBox');
  var bestNewsBox = $('#bestNewsBox');
  var viewBox = $('#viewBox');
  var issueBox = $('#issueBox');

  headBox.load('./monfee/headBox.html');
  viewBox.load('./monfee/viewBox.html');
  bestNewsBox.append('<script src="../js/src/monfee_bestNewsBox.js"></script>');
  issueBox.load('./monfee/issueBox.html',function(){
    $(this).append('<script src="../js/src/monfee_issueBox.js"></script>')
  });//불러온 다음에 해당 불러온 파일의 링쿠를 맨 마지막에 추가하는 것
})(jQuery);

//jQuery에서는 선택자의 형태는 css와 매우 흡사하다.
//단, $('')를 이용하여 내부에 