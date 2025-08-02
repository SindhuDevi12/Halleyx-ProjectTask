const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// ➕ Create new order
router.post('/api/orders', async (req, res) => {
  const { customerId, items, totalAmount } = req.body;
  try {
    const newOrder = await Order.create({ customerId, items, totalAmount });
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: "Error creating order", error: err.message });
  }
});

// 📦 Get orders by customer
router.get('/api/orders/:customerId', async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.params.customerId });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders", error: err.message });
  }
});

module.exports = router;
