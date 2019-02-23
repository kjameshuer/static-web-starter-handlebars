import { afterChange, beforeChange } from './slideHelper';

const SETUP = {
   run($){        
        $(document).foundation();
        if (!(typeof NodeList.prototype.forEach === "function")) {
          NodeList.prototype.forEach = Array.prototype.forEach;
        }
        if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
          $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();      
            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
          });
        }
    },
    addSlider($){

      $('.slider')
      .on('init', () =>{
        beforeChange($);
        afterChange($);
      })
      .on('afterChange', () => afterChange($))
      .on('beforeChange',()=> beforeChange($))
      .slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnFocus: true,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        swipe: true,
        swipeToSlide: true,
        touchMove: true
      });  
    }
}

export default SETUP;