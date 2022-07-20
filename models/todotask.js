const mongoose= require('mongoose')
const todoTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
})

//exporting the module and specify the collection in Mongo DB "tasks"
module.exports = mongoose.model("TodoTask", todoTaskSchema, "tasks")