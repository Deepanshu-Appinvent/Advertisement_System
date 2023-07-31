import ProductModel from "../database/models/product";

export async function bidOnProduct(
  userId: number,
  productId: number,
  biddingPrice: number
): Promise<string> {
  try {
    const product = await ProductModel.findByPk(productId);

    if (!product) {
      throw new Error("Product not found");
    }

    if (product.bidding) {
      if (product.bidding && biddingPrice > product.bidding) {
        product.bidder_id = userId;
        product.bidding = biddingPrice;
        await product.save();
        return "Bid placed successfully";
      } else {
        return "Your bid should be higher than the current bid";
      }
    } else {
      return "Bidding is not available for this product";
    }
  } catch (err) {
    throw new Error("Failed to place bid: " + err);
  }
}
