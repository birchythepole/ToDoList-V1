//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;
let items = [];
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-PL", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});
app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
