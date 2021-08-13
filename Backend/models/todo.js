const mongoose = require("mongoose");
const Schema = mongoose.Schema; //Create schema for Todo List
const TodoSchema = new Schema({
  name: {
    type: String,
    required: [true, "The todo text field is required"],
  },
}); //Create model for todo
const Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;
