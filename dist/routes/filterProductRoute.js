"use strict";
// routes/productRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const filterProductConroller_1 = require("../controllers/filterProductConroller");
const router = express_1.default.Router();
router.post("/filterproducts", filterProductConroller_1.filterProductsByPriceController);
exports.default = router;
