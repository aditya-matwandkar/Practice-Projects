import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"))


mongoose.connect("mongodb://localhost:27017/todotaskDB");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Task = mongoose.model("Task", taskSchema);


app.get("/", async(req, res) => {
    const getTasks = await Task.find();
    res.render("index.ejs", {taskList: getTasks});
});


app.post("/", (req, res) => {
    const newTask = new Task({
        name: req.body.task,
    });
    newTask.save();
    res.redirect("/");
});

app.post("/delete", async (req, res) => {
    const id = req.body.checkbox;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});