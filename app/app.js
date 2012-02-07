var jewel = {
  screens : {}
};

// Wait until main document is loaded
window.addEventListener("load", function() {
  
  // Add tests
  Modernizr.addTest("standalone", function(){
    return (window.navigator.standalone != false);
  });
  
  // Start dynamic loading stage 1
  Modernizr.load([
    {
      // These files are always loaded
      load : [
        "/lib/sizzle.js",
        "/app/js/dom.js",
        "/app/js/game.js"
      ]
    },
    {
      test : Modernizr.standalone,
      yep  : "/app/js/screen.splash.js",
      nope : "/app/js/screen.install.js",
      complete : function() {
        if(Modernizr.standalone) {
          jewel.game.showScreen("splash-screen");
        } else {
         jewel.game.showScreen("install-screen");
        }
      }
    }
  ]);
  
  // Dynamic loading stage 2
  if(Modernizr.standalone) {
    Modernizr.load([
      {
        load : ["/app/js/screen.main-menu.js"]
      }
    ]);
  }
}, false);
