const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({ Data: String });
const ToDo = mongoose.model("ToDo", ToDoSchema, "to-do");

module.exports = ToDo;
