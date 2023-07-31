"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const biddingRoute_1 = __importDefault(require("./biddingRoute"));
const addProductRoute_1 = __importDefault(require("./addProductRoute"));
const deleteProductRoute_1 = __importDefault(require("./deleteProductRoute"));
const updateProductRoute_1 = __importDefault(require("./updateProductRoute"));
const router = express_1.default.Router();
router.use('/api', biddingRoute_1.default);
router.use('/api', addProductRoute_1.default);
router.use("/api", deleteProductRoute_1.default);
router.use("/api", updateProductRoute_1.default);
exports.default = router;
