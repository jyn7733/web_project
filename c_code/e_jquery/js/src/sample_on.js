(function($){
  var dl = $('dl');
  var dt = dl.children('dt');

  dt.on('click',function(e){
    e.preventDefault();
    dt.next().slideDown();
    dt.next('dd').parent().siblings(),children('dd').slideDoup();
  })
})(jQuery);