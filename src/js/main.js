import 'promise-polyfill/src/polyfill';
import SETUP from './setup.js';

(function ($) {
  SETUP.run($);
  if ($('.slider')) {
    $('.slider').slick({
      dots: true,
      infinite: true,
      prevArrow: '<i class="slick-prev fi fi-arrow-left"></i>',
      nextArrow: '<i class="slick-next fi fi-arrow-right"></i>',
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
})(jQuery);
