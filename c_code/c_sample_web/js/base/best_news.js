// best_news.js

var bn_array = [
  {
    'img' : 'menu_01.png',
    'title' : 'Lorem ipsum',
    'text' : 'lore ipsum didleo fid deacrd jemca mc gridwe we are aed nad eijffi eif'
  },
  {
    'img' : 'menu_02.png',
    'title' : 'Lorem ipsum',
    'text' : 'lore ipsum didleo fid deacrd jemca mc gridwe we are aed nad eijffi eif'
  },
  {
    'img' : 'menu_03.png',
    'title' : 'Lorem ipsum',
    'text' : 'lore ipsum didleo fid deacrd jemca mc gridwe we are aed nad eijffi eif'
  },
  {
    'img' : 'menu_04.png',
    'title' : 'Lorem ipsum',
    'text' : 'lore ipsum didleo fid deacrd jemca mc gridwe we are aed nad eijffi eif'
  },
  {
    'img' : 'menu_05.png',
    'title' : 'Lorem ipsum',
    'text' : 'lore ipsum didleo fid deacrd jemca mc gridwe we are aed nad eijffi eif'
  },
  {
    'img' : 'menu_06.png',
    'title' : 'Lorem ipsum',
    'text' : 'lore ipsum didleo fid deacrd jemca mc gridwe we are aed nad eijffi eif'
  },
  {
    'img' : 'menu_07.png',
    'title' : 'Lorem ipsum',
    'text' : 'lore ipsum didleo fid deacrd jemca mc gridwe we are aed nad eijffi eif'
  }
];

var bestNewsImg = document.getElementsByClassName('best_news_img');
var bestNewsTitle = document.getElementsByClassName('best_news_title');
var bestNewsText = document.getElementsByClassName('best_news_text');
var i;
for(i=0; i < bn_array.length; i+=1){
  url = '../img/source/img/new_menu/';
  bestNewsImg[i].style = 'background-image:url('+ url + bn_array[i].img +')';
  bestNewsTitle[i].innerText = (bn_array[i].title);
  bestNewsText[i].innerText = (bn_array[i].text);
}
console.log(bn_array[0].img);