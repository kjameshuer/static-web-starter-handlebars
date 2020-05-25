const SETUP = {
  run($) {

    $(document).foundation();
    // var elem = new Foundation.DropdownMenu($('#mobile-menu'));
    $('#blocker').fadeOut();
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
  }
}

export default SETUP;