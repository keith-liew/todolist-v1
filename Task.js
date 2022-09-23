const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({ name: String }, { timestamps: true });

//export model with the task collection selected along with schema
module.exports = mongoose.model("Task", taskSchema);