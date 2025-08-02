// models/pickupModel.js
const mongoose = require('mongoose');

const pickupSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  itemType: String,
  weight: String,
  status: {
    type: String,
    default: 'Pending',
  },
  requestDate: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Pickup', pickupSchema);
