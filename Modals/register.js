const mongoose = require("mongoose");
const registermodal = new mongoose.Schema({
  Name: String,
  Email: String,
  Phone: String,
  Password: String,
});
module.exports = mongoose.model("users", registermodal);
