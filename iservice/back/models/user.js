const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  user: String,
  company: String,
  service: String,
  email: String,
  phone: String,
  location: String,
  isPremium: String,
  category: String,
  description: String
});

var User = mongoose.model("users", userSchema);

module.exports = User;
