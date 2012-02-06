jewel.game = (function() {
  
  var dom = jewel.dom,
      $ = dom.$;
      
  // Hide the active screen (if any) and show the screen
  // with the specified id
  function showScreen(screenId) {
    var activeScreen = $("#game .screen.active")[0],
        screen = $("#" + screenId)[0];
    
    if(activeScreen) {
      dom.removeClass(activeScreen, "active");
    }
    
    // Run the screen module
    jewel.screens[screenId].run();
    
    // Display the screen html
    dom.addClass(screen, "active");
  }
  
  // Expose public methods
  return {
    showScreen : showScreen
  };
  
})();