// SETUP
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var items = ["Buy Food", "Cook Food", "Eat Food"];

// ROUTES
app.get("/", function(req, res){

  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("index", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
  item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

// START SERVER
app.listen(3000, function(){
  console.log("The server is listenting on port 3000.");
});