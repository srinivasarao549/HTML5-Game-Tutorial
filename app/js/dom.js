jewel.dom = (function() {
  
  var $ = Sizzle;
  
  function hasClass(element, clsName) {
    var rx = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
    return rx.test(element.className);
  }
  
  function addClass(element, clsName) {
    if(!hasClass(element, clsName)) {
      element.className += " " + clsName;
    }
  }
  
  function removeClass(element, clsName) {
    var rx = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
    element.className = element.className.replace(rx, " ");
  }
  
  function bind(element, event, handler) {
    if(typeof element == "string") {
      element = $(element)[0];
    }
    element.addEventListener(event, handler, false);
  }
  
  // Expose public methods
  return {
    $           : $,
    hasClass    : hasClass,
    addClass    : addClass,
    removeClass : removeClass,
    bind        : bind
  };
  
})();