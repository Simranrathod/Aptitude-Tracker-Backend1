const mongoose = require("mongoose");

const scoreschema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserData" },
  score: Number,
  name: String,
  level: String,
  total: Number,
  date: { type: Date, default: Date.now }
 

});

module.exports = mongoose.model("Score", scoreschema);
