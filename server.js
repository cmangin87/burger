var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var port = process.env.PORT || 8080;

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller")

app.use("/", routes);
app.listen(port, function() {
  console.log("App listening on http://localhost:" + port);
});
