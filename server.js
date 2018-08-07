var express = require("express");
var bodyParser = require("body-parser");
//tells node we're creating express server
var app = express();
//sets initial port
var PORT = process.env.port || 3000;
//sets up express app to handle data
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//points server to a series of route files
//these routes give our server a map of how to respond when users visit
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//Listener, effectively starts server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})