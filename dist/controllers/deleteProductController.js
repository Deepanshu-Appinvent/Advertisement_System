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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = void 0;
const deleteProductService_1 = require("../services/deleteProductService");
function deleteProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productId = req.body.productId;
            if (!productId) {
                console.log(productId);
                res.status(400).json({ error: "Missing product ID" });
                return;
            }
            yield (0, deleteProductService_1.deleteProduct)(productId);
            res.json({ message: "Product deleted successfully" });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to delete product: " });
        }
    });
}
exports.deleteProductController = deleteProductController;
