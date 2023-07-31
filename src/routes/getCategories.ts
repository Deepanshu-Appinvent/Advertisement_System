import express from "express";
const router = express.Router();

import Category from "../database/models/categories";

router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log(categories);
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});

export default router;
