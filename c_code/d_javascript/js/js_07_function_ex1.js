// js_07_function_ex1.js

var btnEl = document.getElementsByClassName('btn')[0];
var btnChildButton = btnEl.childNodes[0];
// console.log(btnChildButton) 
var resultBox = document.getElementsByClassName('result')[0];

//버튼을 클릭하면 result 내부의 색상을 변경

//버튼 클릭 -> 버튼.이벤트(수행)
//색상변경 ->  resultBox이벤트 발생에 의해 -> 색상변경 수행

var myBg = function(){
  resultBox.style.backgroundColor = '#7ff';};

btnChildButton.addEventListener('click',myBg);
