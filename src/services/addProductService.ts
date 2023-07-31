import ProductModel from "../database/models/product";

export async function addProductDetails(productData: any): Promise<any> {
  try {
    const product = await ProductModel.create(productData);
    return product;
  } catch (error) {
    throw new Error("Failed to add product details: " + error);
  }
}
