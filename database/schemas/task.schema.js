const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  description: { type: String },
  is_important: { type: Boolean },
  is_starred: { type: Boolean },
});

module.exports = mongoose.model("tasks", taskSchema);
