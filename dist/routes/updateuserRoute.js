"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateuserController_1 = require("../controllers/updateuserController");
const router = express_1.default.Router();
router.put("/update/:userId", updateuserController_1.updateUserController);
exports.default = router;
