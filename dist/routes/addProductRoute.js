"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addProduct_1 = require("../controllers/addProduct");
const joiValidation_1 = require("../middleware/joiValidation");
const router = express_1.default.Router();
router.post("/addproduct", joiValidation_1.joi_addProduct, addProduct_1.addProductDetailsController);
exports.default = router;
