const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const login = require('./backend/routes/index');
const users = require('./backend/routes/users');
const issues = require('./backend/routes/issues');
require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(cookieParser());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
// Build the connection string
//var connectionString = 'mongodb://' + process.env.DB_HOST + ':' + process.env.DB_PORT + '/' + process.env.DB_NAME;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bugTracker", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.once("open", function () {
    console.log("Connection has been made");
}).on("error", function (error) {
    console.log("Connection error", error)
});

// Add routes, both API and view
app.use('/', login)
app.use('/api', users);
app.use('/api', issues);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});