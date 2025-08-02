import express from 'express';
import Customer from '../models/customer.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save();
    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email });

    if (!customer || customer.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful', customer });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
});

export default router;
