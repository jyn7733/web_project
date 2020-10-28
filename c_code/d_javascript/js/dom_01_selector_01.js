

var wrap = document.getElementById('wrap');
wrap.style = 'background-color:#ccf';

var headBox =document.getElementById('headBox');
headBox.style = 'width:100%; height:50px; background-color:#fa0';

var h1 = document.getElementsByTagName('h1')[0];
h1.style = 'width:100px; height: 50px; background-color:#acf';

var h1Link = h1.getElementsByTagName('a')[0];
h1Link.style = 'color:#333; text-decoration:none'

// var navBox = document.getElementById('navBox');
var navBox = document.querySelector('#navBox');
navBox.style = 'width:70%; background-color:#333';

var navList = navBox.querySelectorAll('li'); //all 을 쓰게 될 경우 복수형으로 인식되어 순서를 선택해야함
// navList[0].style = 'background-color: #f7c; margin-bottom:2px;';

navList.forEach(function(data){
  data.style = 'background-color: #f7c; margin-bottom:2px;';
});
//해서 반복문으로 수행
