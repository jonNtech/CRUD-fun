const express = require("express")
const app = express()
const PORT = 8500
const mongoose = require("mongoose")
const cors = require('cors')
const TodoTask = require("./models/todotask")
require("dotenv").config()


//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(cors())

//Database connection
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {console.log(`connected to database!`)}
)

// GET METHOD
app.get("/", async (req, res) => {
    try {
        TodoTask.find({}, (err, tasks) => {
            res.render("index.ejs", { todoTasks: tasks });
        });
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})