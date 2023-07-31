"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const updateprofilepicController_1 = require("../controllers/updateprofilepicController");
const router = express_1.default.Router();
router.post('/addPhoto', updateprofilepicController_1.add_photo);
exports.default = router;
