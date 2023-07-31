import ProductModel from "../database/models/product";

export async function deleteProduct(productId: number): Promise<void> {
  try {
    const product = await ProductModel.findByPk(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    await product.destroy();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete product: ");
  }
}
