// backend/controllers/adminController.js
const jwt = require('jsonwebtoken');

const adminLoginController = (req, res) => {
  const { email, password } = req.body;

  // For now, hardcode admin credentials
  const adminEmail = 'admin@ecotrack.com';
  const adminPass = 'admin123';

  if (email === adminEmail && password === adminPass) {
    const token = jwt.sign({ email }, 'secret123', { expiresIn: '1h' });
    return res.json({ token, message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = {
  adminLoginController,
};
