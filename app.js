const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

var items = ["Buy food", "Cook food", "Eat Food"];
var workItems = [];

app.get("/", function (req, res) {
    res.render("view", { title: date.getDay() , items: items });
});

app.post("/", function (req, res) {
    //console.log(req.body.newItem);
    if (req.body.list === "Work") {
        workItems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(req.body.newItem);
        res.redirect("/");
    }
});

app.get("/about", function (req,res){
    res.render("about");
});

app.get("/work", function (req, res) {
    res.render("view", { title: "Work", items: workItems });
});


app.listen(3000, function () {
    console.log("Server stared on port 3000");
});