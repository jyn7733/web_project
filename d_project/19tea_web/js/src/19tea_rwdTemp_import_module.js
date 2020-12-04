// ex_05_rwdTemp_import_module.js

(function($){
  var nowW = deviceSize();
  // console.log(nowW);
  var deviceType = ['mobile', 'tablet', 'laptop', 'pc', 'pcfull'];
  var wrap = $('#wrap');
// ---------------------------------------------------------------------
  if(nowW === deviceType[0]){
    wrap.append('<script src="../js/src/19tea_main_mobile.js"></script>')
  }else{
    wrap.append('<script src="../js/src/19tea_main.js"></script>')
  }

})(jQuery); 