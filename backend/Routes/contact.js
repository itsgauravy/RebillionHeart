// server/routes/contact.js

const express = require('express');
const router = express.Router();
const Contact = require('../Models/contact'); 
// GET all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// POST: Save contact message
router.post('/', async (req, res) => {
  const { name, email, subject, message, reply } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send("All fields are required.");
  }

  try {
    const newContact = new Contact({ name, email, subject, message, reply, read: false });
    await newContact.save();
    res.status(201).send("Message saved successfully");
  } catch (err) {
    console.error("Failed to save contact:", err.message);
    res.status(500).send("Server error");
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { read } = req.body;
    await Contact.findByIdAndUpdate(req.params.id, { read });
    res.status(200).send('Status updated');
  } catch (err) {
    res.status(500).send('Server error');
  }
});


// DELETE: Remove contact message by ID
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).send("Message deleted successfully");
  } catch (err) {
    console.error("Failed to delete contact:", err.message);
    res.status(500).send("Server error");
  }
});


module.exports = router;
