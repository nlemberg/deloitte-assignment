const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  workTitle: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

module.exports = mongoose.model("employee", employeeSchema);
