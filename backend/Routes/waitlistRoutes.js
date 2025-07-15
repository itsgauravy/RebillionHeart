// routes/waitlistRoutes.js
const express = require('express');
const router = express.Router();
const Waitlist = require('../Models/Waitlist');

// GET all waitlist entries
router.get('/', async (req, res) => {
  try {
    const waitlist = await Waitlist.find().sort({ createdAt: -1 });
    res.json(waitlist);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST new entry
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const entry = new Waitlist({ name, email });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

module.exports = router;
