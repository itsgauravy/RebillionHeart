const mongoose = require("mongoose");

const waitlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, { timestamps: true });

module.exports = mongoose.model("Waitlist", waitlistSchema);
