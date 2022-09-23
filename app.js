require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const mongoose = require("mongoose");
//import Task model from Task.js and List.js
const Task = require("./Task");
const List = require("./List");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

mongoose.connect(process.env.URI).then(console.log("Connected to Atlas")).catch(function (e) { console.log(e) });

const task1 = new Task({
    name: "Default Task 1",
});

const task2 = new Task({
    name: "Default Task 2",
});

const task3 = new Task({
    name: "Default Task 3"
});

const defaultTasks = [task1, task2, task3];

app.get("/", function (req, res) {
    Task.find({}).then(function (result) {
        if (result.length === 0) {
            Task.insertMany(defaultTasks, function (e) {
                if (e) {
                    console.log(e.message)
                } else {
                    // console.log("Successfully inserted");
                }
            });
            res.redirect("/");
        } else {
            //new Date().toLocaleDateString()
            res.render("view", { title: "Today", items: result });
        }
    });
});

app.post("/", function (req, res) {
    const newTask = new Task({
        name: req.body.newItem,
    })

    if (req.body.list === "Today") {
        newTask.save().then(function () { /*console.log("New task added")*/ }).catch(function (e) { console.log(e.message) });
        res.redirect('/');
    } else {
        List.findOne({ name: req.body.list }).then(function (result) {
            result.tasks.push(new Task({
                name: req.body.newItem,
            }));
            result.save();
            //little buffer time
            setTimeout(function () { res.redirect("/" + req.body.list); }, 100);
        }).catch(function (e) { console.log(e.message) });
    }
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.post("/delete", function (req, res) {
    const checkedTask = req.body.checkbox;

    if (req.body.list === "Today") {
        Task.deleteOne({ _id: checkedTask }).then(function () { /*console.log("Task deleted")*/ }).catch(function (e) { console.log(e.message) });
        res.redirect("/");
    } else {
        List.findOne({ name: req.body.list }).then(function (result) {
            result.tasks.pull(checkedTask);
            result.save();
            res.redirect("/" + req.body.list);
        }).catch(function (e) { console.log(e.message) });
    }
});

app.get("/:newParam", function (req, res) {
    const newListName = _.capitalize(req.params.newParam);

    List.findOne({ name: newListName }).then(function (result) {
        if (!result) {
            const newList = new List({
                name: newListName,
                tasks: defaultTasks,
            })
            newList.save().then(/*console.log("Saved new list")*/).catch(function (e) { console.log(e.message) });
            res.redirect("/" + newListName);
        } else {
            res.render("view", { title: result.name, items: result.tasks });
        }
    })
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server stared on port 3000");
});