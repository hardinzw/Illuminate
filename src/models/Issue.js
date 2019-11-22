const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  project: { type: String, required: true },
  subject: { type: String, required: true },
  severity: { type: String, required: true },
  status: { type: String, required: true },
  created: { type: Date, default: Date.now },
  author: { type: String, required: true }
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;