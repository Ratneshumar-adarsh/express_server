//jshint esversion:6
const { response } = require("express");
const express = require("express");

const app = express();

app.get("/", function (request, response) {
      //console.log(request);
      //response.send("hello");
      response.send("<h1>ratnesh</h1>");
});

app.get("/contact", function (req, res) {
      res.send("contact me at ratnesh@gmail.com");
});

app.get("/about", function (req, res) {
      res.send("i am ratnesh kumar");
});
app.get("/hobbies", function (req, res) {
      res.send("<ul><li>badminton</li><li>football</li>");
});
app.get("/hey", function (req, res) {
      res.send("");
});
app.listen(3000, function () {
      console.log("server started on port 3000");
});
