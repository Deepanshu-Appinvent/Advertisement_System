
import { Request, Response } from "express";
import { updateProduct } from "../services/updateProductService";

export async function updateProductController(req: Request, res: Response): Promise<void> {
  try {
    const productId = req.body.productId;
    const updatedData = req.body.updatedData; 

    if (!productId || !updatedData) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    await updateProduct(productId, updatedData);
    res.json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update product: "  });
  }
}
