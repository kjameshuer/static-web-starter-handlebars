import 'promise-polyfill/src/polyfill';
import SETUP from './setup.js';

(function ($) {
  SETUP.run($);
  SETUP.addSlider($);
})(jQuery);
