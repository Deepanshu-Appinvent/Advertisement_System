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
exports.bidOnProductController = void 0;
const biddingService_1 = require("../services/biddingService");
const user_1 = __importDefault(require("../database/models/user"));
const product_1 = __importDefault(require("../database/models/product"));
function bidOnProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, productId, biddingPrice } = req.body;
            if (!userId || !productId || !biddingPrice) {
                return res.status(400).json({ error: "Missing required fields" });
            }
            const user = yield user_1.default.findByPk(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            const product = yield product_1.default.findByPk(productId);
            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }
            const result = yield (0, biddingService_1.bidOnProduct)(userId, productId, biddingPrice);
            res.json({ message: result });
        }
        catch (error) {
            res.status(500).json({ error: "Failed to place bid: " + error });
        }
    });
}
exports.bidOnProductController = bidOnProductController;
