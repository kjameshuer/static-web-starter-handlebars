import 'promise-polyfill/src/polyfill';

(function ($) { 
  
    $('body').removeClass('no-js');
    $(document).foundation();
    if ( !(typeof NodeList.prototype.forEach === "function") ){
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
    $('.slider').slick({
      dots: true,
      infinite: true,
      prevArrow: '<button type="button" class="slick-prev">\x3c</button>',
      nextArrow: '<button type="button" class="slick-next">\x3e</button>',
      autoplay: true,
      autoplaySpeed: 5000,
    });
   
  })(jQuery);
  