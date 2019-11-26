const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const usersRouter = require('./backend/routes/users');
const issuesRouter = require('./backend/routes/issues');
require("dotenv").config();

// Define middleware here
app.use(cors());
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bugTracker", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once("open", function () {
    console.log("Connection has been made");
}).on("error", function (error) {
    console.log("Connection error", error)
});

// Add routes, both API and view
app.use('/users', usersRouter);
app.use('/issues', issuesRouter);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});