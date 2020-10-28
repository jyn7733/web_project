// js_08_array2.js

var coffee=[
  'esspresso',
  'americano',
  'capuchino',
  'caffe latte',
  'cafe moca',
  'vanila choco latte'
];
// console.log(coffee);
var cLen = coffee.length;
// console.log(cLen);

// pop(), push(), shift(), unshift(), concat()

// console.log(coffee[2]);

var i = coffee.indexOf('cafe moca'); //원하는 아이의 위치를 알 수 있는 메소드
                                     //없을 경우 -1, 있을 경우 해당 위치값 
// console.log(i);

var str = '안산, 수원, 강릉, 부산, 제주, 서울, 태안, 순천, 여수, 거제, 인천';
// console.log(str.indexOf('산'))
// console.log(str.length)

var strrToArray = str.split(', ');
// console.log(strrToArray);

var tel ='010-999-9999';
// console.log(tel.split('-'));

// console.log(coffee)
var coffeeToPar = coffee.join(',');
// console.log(coffeeToPar);

var coffeeSort = coffee.sort();
// console.log(coffeeSort);
var coffeeReverse = coffee.reverse();
// console.log(coffeeReverse);
var coffeeDec = coffee.sort(function(a,b){return a- b});
// console.log(coffeeDec);

var arr = [1,5,10,3,2,7,6,8,9];
// console.log(arr.sort(function(a,b){return b - aj}));

coffee.push('ice tea');
coffee.pop();
console.log(coffee);

