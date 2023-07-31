"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteProductController_1 = require("../controllers/deleteProductController");
const joiValidation_1 = require("../middleware/joiValidation");
const router = express_1.default.Router();
router.post("/deleteproduct", joiValidation_1.joi_deleteProduct, deleteProductController_1.deleteProductController);
exports.default = router;
