"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateProductController_1 = require("../controllers/updateProductController");
const router = express_1.default.Router();
router.post("/updateproduct", updateProductController_1.updateProductController);
exports.default = router;
