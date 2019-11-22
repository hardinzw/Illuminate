const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bugTracker");
mongoose.connection.once("open", function () {
    console.log("Connection has been made");
}).on("error", function (error) {
    console.log("Connection error", error)
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});