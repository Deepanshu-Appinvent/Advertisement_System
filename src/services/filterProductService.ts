import { Op } from "sequelize";
import ProductModel from "../database/models/product";

export async function filterProductsByPrice(budgetPrice: number): Promise<any[]> {
  try {
    const filteredProducts = await ProductModel.findAll({
      where: {
        base_price: {
          [Op.lte]: budgetPrice,
        },
      },
    });

    return filteredProducts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to filter products: ");
  }
}
