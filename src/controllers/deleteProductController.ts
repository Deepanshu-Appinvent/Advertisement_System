import { Request, Response } from "express";
import { deleteProduct } from "../services/deleteProductService";

export async function deleteProductController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const productId = req.body.productId;

    if (!productId) {
      console.log(productId);
      res.status(400).json({ error: "Missing product ID" });
      return;
    }

    await deleteProduct(productId);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete product: " });
  }
}
