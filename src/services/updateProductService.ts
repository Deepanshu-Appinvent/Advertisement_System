
import  ProductModel  from "../database/models/product";

export async function updateProduct(productId: number, updatedData: any): Promise<void> {
  try {
    const product = await ProductModel.findByPk(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    await product.update(updatedData);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update product: " );
  }
}
