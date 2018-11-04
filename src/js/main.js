import 'promise-polyfill/src/polyfill';

(function ($) { 
  
    $('body').removeClass('no-js');
    $(document).foundation();
    if ( !(typeof NodeList.prototype.forEach === "function") ){
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

   
  })(jQuery);
  