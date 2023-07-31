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
exports.updateProductController = void 0;
const updateProductService_1 = require("../services/updateProductService");
function updateProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productId = req.body.productId;
            const updatedData = req.body.updatedData;
            if (!productId || !updatedData) {
                res.status(400).json({ error: "Missing required fields" });
                return;
            }
            yield (0, updateProductService_1.updateProduct)(productId, updatedData);
            res.json({ message: "Product updated successfully" });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to update product: " });
        }
    });
}
exports.updateProductController = updateProductController;
