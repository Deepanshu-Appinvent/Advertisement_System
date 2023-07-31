import { Request, Response } from "express";
import { filterProductsByPrice } from "../services/filterProductService";

export async function filterProductsByPriceController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const budgetPrice = req.body.budgetPrice;

    if (!budgetPrice) {
      res.status(400).json({ error: "Missing budgetPrice in the request body" });
      return;
    }

    const filteredProducts = await filterProductsByPrice(budgetPrice);

    res.json(filteredProducts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to filter products: " });
  }
}
