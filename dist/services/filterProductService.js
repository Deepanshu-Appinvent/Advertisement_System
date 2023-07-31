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
exports.filterProductsByPrice = void 0;
const sequelize_1 = require("sequelize");
const product_1 = __importDefault(require("../database/models/product"));
function filterProductsByPrice(budgetPrice) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const filteredProducts = yield product_1.default.findAll({
                where: {
                    base_price: {
                        [sequelize_1.Op.lte]: budgetPrice,
                    },
                },
            });
            return filteredProducts;
        }
        catch (error) {
            console.log(error);
            throw new Error("Failed to filter products: ");
        }
    });
}
exports.filterProductsByPrice = filterProductsByPrice;
