// Requiring necessary npm packages


var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 8080;

var app = module.exports = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: true}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var burgers_controller = require("./controllers/burgers_controller.js");

app.use('/' , burgers_controller);
app.use("/burgers", burgers_controller);


app.listen(port, function() {
	console.log("App listening on PORT " + port);
});