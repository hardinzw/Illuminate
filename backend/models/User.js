const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');

const userSchema = new Schema({ 
    first_name: {
      type: String,
      required: 'Please enter the first name'
    },
    last_name: {
      type: String,
      required: 'Please enter the last name'
    },
    email: {
      type: String,
      required: 'Please enter the email'
    },
    password: {
      type: String,
      required: 'Please enter the last name'
    },
    created_at: {
      type: Date,
      default: Date.now
    },
    updated_at: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
          type: String,
          enum: ['active', 'inactive']
      }],
      default: ['active']
  }  
});

const User = mongoose.model("User", userSchema);

module.exports = User;