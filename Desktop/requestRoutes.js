const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// Create new pickup request
router.post('/', async (req, res) => {
  try {
    const newRequest = new Request(req.body);
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all requests (for admin)
router.get('/', async (req, res) => {
  try {
    const requests = await Request.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update status (admin panel)
router.put('/:id', async (req, res) => {
  try {
    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedRequest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
