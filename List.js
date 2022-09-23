const mongoose = require("mongoose");
const taskSchema = require("./Task").schema;

const listSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tasks: [taskSchema]
});

module.exports = mongoose.model("List", listSchema);