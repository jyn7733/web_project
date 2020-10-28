
/*
var a=[1,2,3];

a.push('one'); //맨 뒤에 추가
console.log(a);

a.shift(); //첫 번째 아이를 삭제
console.log(a);

a.push('three');
a.push('four');
console.log(a);

a.pop();//맨 뒤에 있는 아이를 삭제
a.pop();
console.log(a);

a.unshift('before'); //맨 앞에 추가
console.log(a); */

/*
var b=[1,2,3];
var c=[4,5,6];
var d;

d = b.concat(c); //b와c의 내용을 합친 것
console.log(b);
console.log(c);
console.log(d);

var ar;
//ar = new Array javascript에서는 이 방법을 쓰지 않는다.
ar = [];
ar[4]='in string'; 
console.log(ar); //1~4번째는 아무것도 들어있지 않기 때문에 비어있다고 뜬다. 
*/
/*
var arrQ_01=[];
var i;
for(i=0; i<100; i+=1){
  arrQ_01[i]=i+1;
};
console.log(arrQ_01);

var arrQ_02=[];
var j=0, k, l;
for(; j<100; j+=1){
  k = j%2;

  if(k===1){
    arrQ_02.push(j);
  }else{continue};
  // l = parseInt(j/2);
  // arrQ_02(l) = j;
};
console.log(arrQ_02);
*/
/*
var Q_03=[];
var i=0;
for(; i < 100; i+=1){
  Q_03[i]=100-i;
};
console.log(Q_03);

var Q_04=[];
var j=0, k;
for(; j < 100; j+=1){
       k=j%2;
   if(k===0){
    Q_04.push(100-j);
   };
 };
 console.log(Q_04);
 */

 var nav = document.getElementsByClassName('nav')[0];
 var li_list=['nav_01','nav_two','nav_tt','four'];
 var a_link=['https://www.naver.com/','https://www.daum.net/','http://www.cgv.co.kr/','http://xidoweb.com/']

var i,li,a;
var liList = li_list.length;
var aLink = a_link.length;
for(i=0; i<4; i+=1){
  li = document.createElement('li');
  a = document.createElement('a');
  a.setAttribute('href',a_link[i]); 

  //href는 속성값이기 때문에 'setAttribute'를 통해 생성해준다.
  //setAttribute('href','./'+li_list+'.html') 이렇게 쓰면 html문서로 이동

  li.classList.add(li_list[i]);
  a.innerText = '글쓰기' + (i+1);
  nav.append(li);
  li.append(a);
}

 





