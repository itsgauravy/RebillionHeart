const express = require("express");
const router = express.Router();
const Newsletter = require("../Models/newsletter");

// POST: Subscribe a new email
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const newSubscriber = new Newsletter({ email });
    await newSubscriber.save();

    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error("Error saving email:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET: Retrieve all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Newsletter.find().sort({ subscribedAt: -1 });
    res.status(200).json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE: Remove a subscriber by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Newsletter.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Subscriber not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error("Error deleting subscriber:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
