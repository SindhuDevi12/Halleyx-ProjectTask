import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

router.post("/add-to-cart", async (req, res) => {
  const { userEmail, productId, productName, productImage, price } = req.body;

  try {
    // Check if product already in cart
    const existing = await Cart.findOne({ userEmail, productId });
    if (existing) {
      existing.quantity += 1;
      await existing.save();
      return res.json({ message: "Product quantity updated" });
    }

    const newItem = new Cart({
      userEmail,
      productId,
      productName,
      productImage,
      price,
    });

    await newItem.save();
    res.json({ message: "Added to cart" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding to cart" });
  }
});

export default router;
