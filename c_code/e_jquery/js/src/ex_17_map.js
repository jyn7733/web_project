//ex_17_map.js

  var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  // var container = document.getElementsByClassName('map_img')[0]; //클레스로 할 경우
  // 37.30293772283889,127.00870725318579
  var MySetMap = function(lat, lng){
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
  
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(lat, lng); 
    
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // map.setZoomable(false);
    // var zoomControp = new kakao.maps.ZoomControl();
    // map.addControl(zoom)
  }

  MySetMap(37.30293772283889,127.00870725318579);
//--------------------------------------------------------------
(function($){
  var store = $('.store');
  var storeLi = store.find('li');
  
  storeLi.on('click',function(e){
    e.preventDefault();
    $('#map').empty(); //소스코드 중복겹침 방지
    
    var liLink = $(this).children('a');
    //parseInt()-> 정수로 변환
    //parseFloat()->소수점까지 변환

    var liLat = parseFloat(liLink.attr('data-x'));
    var liLng = parseFloat(liLink.attr('data-y'));
    MySetMap(liLat,liLng);
    
    $(this).addClass('action');
    $(this).siblings().removeClass('action');
    });

})(jQuery);  