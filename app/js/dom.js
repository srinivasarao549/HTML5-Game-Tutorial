jewel.dom = (function() {
  
  var $ = Sizzle;
  
  function hasClass(el, clsName) {
    var rx = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
    return rx.test(el.className);
  }
  
  function addClass(el, clsName) {
    if(!hasClass(el, clsName)) {
      el.className += " " + clsName;
    }
  }
  
  function removeClass(el, clsName) {
    var rx = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
    el.className = el.className.replace(rx, " ");
  }
  
  // Expose public methods
  return {
    $           : $,
    hasClass    : hasClass,
    addClass    : addClass,
    removeClass : removeClass
  };
  
})();