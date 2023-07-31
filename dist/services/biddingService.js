"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bidOnProduct = void 0;
const product_1 = __importDefault(require("../database/models/product"));
function bidOnProduct(userId, productId, biddingPrice) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield product_1.default.findByPk(productId);
            if (!product) {
                throw new Error("Product not found");
            }
            if (product.bidding) {
                if (product.bidding && biddingPrice > product.bidding) {
                    product.bidder_id = userId;
                    product.bidding = biddingPrice;
                    yield product.save();
                    return "Bid placed successfully";
                }
                else {
                    return "Your bid should be higher than the current bid";
                }
            }
            else {
                return "Bidding is not available for this product";
            }
        }
        catch (err) {
            throw new Error("Failed to place bid: " + err);
        }
    });
}
exports.bidOnProduct = bidOnProduct;
