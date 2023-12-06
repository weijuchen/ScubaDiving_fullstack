const mongoose = require("mongoose");

const userDetailsScehma = new mongoose.Schema(
  {
    username: String,
    // lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "UserInfo",
  }
);

// mongoose.model("UserInfo", UserDetailsScehma);

module.exports = mongoose.model("UserInfo", userDetailsScehma);
