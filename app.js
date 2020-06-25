//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  if (currentDay === 6 || currentDay === 0 ){
      res.write("<h1>Yey it's the weekend!</h1>")
      res.write("<h1>Yey it's the weekend!</h1>")
      res.send();
  }else{
      res.sendFile(__dirname +"/index.html");
  }
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
