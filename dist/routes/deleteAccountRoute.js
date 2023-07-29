"use strict";
// routes/deleteAccountRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteAccountContoller_1 = require("../controllers/deleteAccountContoller");
const router = express_1.default.Router();
// Delete account route
router.delete("/delete-account", deleteAccountContoller_1.deleteAccount);
exports.default = router;
