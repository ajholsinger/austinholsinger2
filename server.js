var http = require("http");
var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
  return res.sendFile(path.resolve("Pages/index.html"));
});

/*app.get("/tables", function(req, res) {
  return res.sendFile("tables.html");
});*/

app.listen(PORT, function() {
  console.log("Listening for " + PORT);
});
