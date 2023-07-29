"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generatePassController_1 = require("../controllers/generatePassController");
const checkPassController_1 = require("../controllers/checkPassController");
const router = express_1.default.Router();
router.post('/gerneratePass', generatePassController_1.gerneratePass);
router.post('/checkPass', checkPassController_1.checkPass);
exports.default = router;
