// js_06_function.js

// var i =0;
// console.log(i);

// 함수는 어떠한 기능을 묶어서 수행하도록 처리하게 만든 형태
// 함수를 호출하여 사용할때에는 '함수의 이름()'을 사용한다.

//  var fn = function(){
//    return 10;
//  };
 
// var fnReturn = fn();
// console.log(fnReturn);

// var fn2 = function(){
//   console.log(20);
// }
// fn();

// var fnR = 10;
// console.log(fnR)

// var fn = function(){return 20;};

// var fnR = fn();
// console.log(fnR);

// var fn2 = function(a){ return a*a;};
// fnR = fn2(16);
// console.log( fnR );

// var old = 0;
// var ret; // 전역변수;콘솔에서 불러오면 불러와 짐.

// var myold = function(old){//매개변수 -> 'function(old)'
//   var ret; // 함수 안에 들어와 선언하게 되면 콘솔로 불러와도 정의되어 있지 않다고 뜬다. 함수 밖에서는 없는 아이로 인지.
//   if(old < 20){
//     ret ='아직 미성년 입니다.';
//   }else if(old < 30){
//     ret='아직 순수 하시군요.';
//   }else if(old < 60){
//     ret='가장 열심히 일하고 계시는 시기군요.';
//   }else {
//     ret ='이제 즐기면서 ~~'
//   }
//   return ret;
// };

// console.log( myold(15) );

//함수: 함수 선언식, 함수 표현식

/* console.log( DecFn() );
console.log( ExpFn() );
function DecFn(){return 1;} //선언식

var ExpFn = function(){return 2;}//표현식 */

//1. 함수 선언식의 경우 함수가 선언되기 전에 콘솔로 보여주라 라고 해도 값을 보여준다.
//2. - 함수 선언식은 함수를 나중에 식을 만들어도 실제로는 제일 첫 줄에 들어가는 것으로 인식하게 된다.
//   - 함수 선언식의 경우 실제 함수는 밑에 있지만 위에 있는 것처럼 인식하여 이것을 호이스팅(Hoisting) 현상이라고 한다.

/*함수 표현식의 경우 변수를 선언한 부분이 Hoisting 현상이 발생하여
  var ExpFn
  console.log( ExpFn() );
  function(){return 2;}

  이러한 형식으로 인식하게 된다.
*/

function DecFn(){return 1;} //함수에 이름이 부여되어 있기 때문에 기명함수
var ExpFn = function(){return 2;}//함수자체에는 이름이 부여되지 않기 때문에 익명함수

console.log( DecFn() );
console.log( ExpFn() );

//** 용어 **/
//매개변수, 인수, 인자, 전역변수, 익명함수, 기명함수
//함수 선언식(declarationse), 함수표현식(Expression), hoisting(끌어올리는 현상), 생성자 함수

//함수는 최초의 형태 하나만 존재하므로 이를 복제하여 사용한다는 개념으로 인지-생성자함수
/*
var myNewFn = function(nick){
  this.name = nick;
  this.family = 'lee';
  return nick;
}; 

var a = new myNewFn('xido');
console.log(a);*/


//this는 js에서 두 가지의 개념을 가진다.: 1(window), 2(생성자 처리시 매개변수 또는 선택개체)
//------------------------------
console.log(this)

/* 
선언식(함수자체에 이름을 부여하는 방법)
  function DecFn(){return 1;} 

표현식(함수를 변수에 대입하는 방법)
  var ExpFn = function(){return 2;}

생성자함수(함수기능을 복제하여 재처리 하는 함수)

즉시 실행 함수(함수지만 재활용이 불가능한 함수)

*/

/*var ffn = function(){
  var i =10;
  var j = 7;
  return i+j;
}
*/

// 즉시실행함수(IIFE:Immediately Invoked Function Expression)
// (function(k){
//   var i = k;
//   var j = 7;
//   console.log(i * j);
//   return i * j;
// })(10);

//함수를 수행시킬 때 var f = function(){} => f(); 이렇게 입력하면 수행을 하는데 즉시 실행시키려면
//(function(){})(); 이렇게 축약하여 실행시킨다.

var FFN = function(){
  var y = 10;
  var uu = 7;
  return y * uu;
};

var d = FFN();
console.log(d);