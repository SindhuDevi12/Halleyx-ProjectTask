import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  address: String
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
