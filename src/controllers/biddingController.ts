import { Request, Response } from "express";
import { bidOnProduct } from "../services/biddingService";
import UserModel from "../database/models/user";
import ProductModel from "../database/models/product";

export async function bidOnProductController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { userId, productId, biddingPrice } = req.body;
    if (!userId || !productId || !biddingPrice) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = await UserModel.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const product = await ProductModel.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    const result = await bidOnProduct(userId, productId, biddingPrice);
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ error: "Failed to place bid: " + error });
  }
}
