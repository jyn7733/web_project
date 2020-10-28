// js_09

// var obj = new Object;
var obj = {
  'samsung':'galaxy',
  'apple' : 'iphone',
  'google' : 'pixel',
  'lg' : 'belbet'
};
// console.log(obj.google);
// console.log(obj['google'])

obj.nokia = 'banana';
obj.Fn= function(person){
  return person + '님 반가워요!';
};
// console.log(obj);
var x = obj.Fn('xido'); //'____.__'의 형태를 메소드라고 한다. 
// console.log(x);


// console.log(arrObj[0].serise)
/*
var p = 0;
for(; p < arrObj.length; p+=1){
  console.log( (p + 1 )+ '.' + arrObj[p].serise);
};

arrObj.forEach(function(data, idx){
  console.log((idx + 1) + '.' + '')
});
*/
var p = 0;
for(; p < arrObj.length; p+=1){
  console.log( (p + 1 )+ '.' + arrObj[p].company);
};


var product = document.getElementsByClassName('product')[0];
var i=0;
var url ='../img/';
for(; i<arrObj.length; i+=1){
  var div = document.createElement('div');
  var h3 = document.createElement('h3');
  var p_site = document.createElement('p');
  var p_text = document.createElement('p');
  var a_link = document.createElement('a');
  var imgBox = document.createElement('div');

  div.classList.add(arrObj[i].company);
  h3.innerText = (arrObj[i].company);
  a_link.setAttribute('href',arrObj[i].site);
  a_link.innerText = (arrObj[i].company)+' site';
  p_text.innerText = (arrObj[i].content);
  imgBox.classList = ('product_img');

  imgBox.style='background-image:url('+ url + arrObj[i].img +')';

  product.append(div);
  div.append(imgBox)
  div.append(h3);
  div.append(p_site);
  div.append(p_text);
  p_site.append(a_link);

};
//append의 반대 preppend 
//뒤에 삽입     앞에 삽입

