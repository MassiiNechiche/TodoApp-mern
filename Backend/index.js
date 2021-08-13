const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./server.js");
const Todo = require("./models/todo");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, (req, res) => {
  console.log("API Server running");
});

db();

app.get("/", (req, res, next) => {
  Todo.find({}, "name")
    .then((data) => res.json(data))
    .catch(next);
});

app.post("/", (req, res, next) => {
  if (req.body.name) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty!",
    });
  }
});

app.delete("/:id", (req, res, next) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});
