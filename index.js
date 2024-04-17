const express = require("express");
const mongoose = require("mongoose");
const ToDo = require("./models/ToDoModel");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use()
app.set("view engine", "ejs");
app.set("views", "./views");

mongoose
	.connect("mongodb://localhost:27017/test")
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
	res.render("index");
});
app.post("/", (req, res) => {console.log(req.body);});
app.delete("/", (req, res) => {});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
