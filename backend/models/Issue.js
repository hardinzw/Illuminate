const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const issueSchema = new Schema({
  issue: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  reporter: { type: String, required: true },
  severity: { type: String, required: true },
  status: { type: String, required: false },
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;