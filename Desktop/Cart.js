import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  productId: { type: String, required: true },
  productName: String,
  productImage: String,
  price: Number,
  quantity: { type: Number, default: 1 },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
