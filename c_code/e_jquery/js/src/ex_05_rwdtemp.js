// ex_05_rwdtemp.js

/**
 * 1. 브라우저의 가로 크기값 확인
 * 2. 내가 원하는 기준치로 설정된 범위(이름을 설정해서 처리)에 맞는지 파악(moblie,tablet,latop,pc.....)
 * 3. 브라우저 크기가 변경될때 ('resize') 기존 가로값과 변경된 가로값을 비교하여 일치하지 않을 경우에 재처리
 */
  //  var winW = win.css('width'); //문제점: 1. 문자로 값을 가져옴 
                                //2. padding, margin, border값을 제외한 값을 가져옴. 해당 값을 주었을 경우 각각 가져와야함
   
  //선택자.withd( ) -> 가로값을 수치
  // .innerWidth() -> padding포함 수치                              
  // .outerWidth() -> padding + border포함 수치                              
  // .outerWidth(true) -> margin(padding + border)포함 수치   
  
  var deviceSize = function(){ //함수 안에서 정의된 것은 외부에서 인지가 되지 않기 때문ㅇ에 통째로 묶어준다.
    var resultDevice;
  (function($){

  //기준치를 설정
  [480, 1024, 1440, 1920]
  var deviceType = [
    {type: 'mobile', size:480},
    {type: 'tablet', size:1024},
    {type: 'laptop', size:1440},
    {type: 'pc', size:1920},
    {type: 'pcfull'}
  ]

   var win = $(window);
   var beforeWinW = win.outerWidth(true); //사이즈 변경되기 이전의 가로값

   var deviceCheck = function(winW){
      // type 체크  
   var myType;                       
   // if(winW < deviceType[0].size){
   //   mytype = deviceType[0].type;
   // }else if(winW < deviceType[1].size){
   //   mytype = deviceType[1].type;
   // }else if(winW < deviceType[2].size){
   //   mytype = deviceType[2].type;
   // }else if(winW < deviceType[3].size){
   //   mytype = deviceType[3].type;
   // }else{
   //   mytype = deviceType[deviceType.length - 1].type;
   // };
 
   for(var i = 0; i < deviceType.length; i+=1){
     if(winW <= deviceType[i].size){
       myType = deviceType[i].type;
       break;
     }else{
       mytype = deviceType[deviceType.length - 1].type;
     }
   };
    console.log(myType);
    return myType;
   };
   var winsize = deviceCheck(beforeWinW);
   resultDevice = winsize;
  //----------------------- 
  win.on('resize', function(){
    var reWinW = win.outerWidth(true);
    var afterWinSize = deviceCheck(reWinW);
    //기존 디바이스 타입과 변경된 디바이스 타입이 다른경우 새로고침
   if(winsize !== afterWinSize){
      location.reload();
   }
  });
  return resultDevice;
 })(jQuery);
 return resultDevice;
};