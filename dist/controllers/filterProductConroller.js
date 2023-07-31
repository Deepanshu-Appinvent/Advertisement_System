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
exports.filterProductsByPriceController = void 0;
const filterProductService_1 = require("../services/filterProductService");
function filterProductsByPriceController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const budgetPrice = req.body.budgetPrice;
            if (!budgetPrice) {
                res.status(400).json({ error: "Missing budgetPrice in the request body" });
                return;
            }
            const filteredProducts = yield (0, filterProductService_1.filterProductsByPrice)(budgetPrice);
            res.json(filteredProducts);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Failed to filter products: " });
        }
    });
}
exports.filterProductsByPriceController = filterProductsByPriceController;
