// routes/adminRoutes.js
import express from "express";

const router = express.Router();

// Example route
router.get("/", (req, res) => {
  res.send("Welcome to Admin Panel!");
});

// Add more admin routes here

export default router;
