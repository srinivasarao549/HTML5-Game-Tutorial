var jewel = {
  screens : {}
};

// Wait until main document is loaded
window.addEventListener("load", function() {
  // Start dynamic loading
  Modernizr.load([
    {
      // These files are always loaded
      load : [
        "/lib/sizzle.js",
        "/app/js/dom.js",
        "/app/js/game.js",
        "/app/js/screen.splash.js",
        "/app/js/screen.main-menu.js"
      ],
      
      // Called when all files have finished loading
      // and executing
      complete : function() {
        console.log("All modules loaded");
        jewel.game.showScreen("splash-screen");
      }
    }
  ]);
}, false);
