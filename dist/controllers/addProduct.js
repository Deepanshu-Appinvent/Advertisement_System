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
exports.addProductDetailsController = void 0;
const addProductService_1 = require("../services/addProductService");
const user_1 = __importDefault(require("../database/models/user"));
const address_1 = __importDefault(require("../database/models/address"));
function addProductDetailsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user_id, product_name, description, bidding, base_price, title, category_id, address_id, } = req.body;
            if (!product_name || !user_id || !address_id) {
                res.status(400).json({ error: "Missing required fields" });
                return;
            }
            const user = yield user_1.default.findByPk(user_id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }
            const address = yield address_1.default.findByPk(address_id);
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
            const product = yield (0, addProductService_1.addProductDetails)(productData);
            res.json({ message: "Product details added successfully", product });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to add product details: " });
        }
    });
}
exports.addProductDetailsController = addProductDetailsController;
