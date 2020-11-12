const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  age: {
    type: Number
  },
  phone: {
    type: Number
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
