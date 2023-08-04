const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fname: {
    required: true,
    type: String,
  },
  lname: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    isEmail: true,
  },
  number: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("User", userSchema);
