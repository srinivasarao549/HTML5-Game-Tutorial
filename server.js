var express = require("express"),
    app = express.createServer();

// Configure app
app.use("/lib", express.static(__dirname + "/lib"));
app.use("/app", express.static(__dirname + "/app"));

// Routing
app.get("/", function(req, res){
	res.sendfile("index.html");
});

// Start listener
app.listen(80);