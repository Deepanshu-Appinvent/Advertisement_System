import { Request, Response } from "express";
import { addProductDetails } from "../services/addProductService";
import UserModel from "../database/models/user";
import AddressModel from "../database/models/address";

export async function addProductDetailsController(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const {
      user_id,
      product_name,
      description,
      bidding,
      base_price,
      title,
      category_id,
      address_id,
    } = req.body;

    if (!product_name || !user_id || !address_id) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const user = await UserModel.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const address = await AddressModel.findByPk(address_id);
    if (!address) {
      return res.status(404).json({ error: "Product not found" });
    }

    const productData = {
      user_id,
      product_name,
      description,
      bidding,
      base_price,
      title,
      category_id,
      address_id,
    };

    const product = await addProductDetails(productData);
    res.json({ message: "Product details added successfully", product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add product details: " });
  }
}
