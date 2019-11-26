const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  project: { type: String, required: true },
  subject: { type: String, required: true },
  severity: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
  username: { type: String, required: false },
}, {
  timestamps: true,
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;