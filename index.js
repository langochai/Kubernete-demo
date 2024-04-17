const express = require("express");
const mongoose = require("mongoose");
const ToDo = require("./models/ToDoModel");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");

mongoose
	.connect("mongodb://localhost:27017/test")
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", async (req, res) => {
	const data = await ToDo.find();
	res.render("index", { data });
});
app.post("/", async (req, res) => {
	const newToDo = new ToDo({
		Data: req.body.value,
	});
	await newToDo.save();
});
app.delete("/:data", async (req, res) => {
	const { data } = req.params;
	ToDo.findOneAndDelete({ Data: data });
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
