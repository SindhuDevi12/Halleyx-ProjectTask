import express from 'express';
const router = express.Router();

// Example route
router.post('/pickup', (req, res) => {
  res.json({ message: 'Pickup request received' });
});

export default router;
