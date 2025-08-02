import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, default: "Pending" },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
fetch("http://localhost:5001/api/products")
