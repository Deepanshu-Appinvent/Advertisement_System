"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteAccountContoller_1 = require("../controllers/deleteAccountContoller");
const router = express_1.default.Router();
router.delete("/delete", deleteAccountContoller_1.deleteAccount);
exports.default = router;
