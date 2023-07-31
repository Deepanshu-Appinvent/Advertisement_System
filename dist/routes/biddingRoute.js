"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const biddingController_1 = require("../controllers/biddingController");
const joiValidation_1 = require("../middleware/joiValidation");
const router = express_1.default.Router();
router.post("/bid", joiValidation_1.joi_bidding, biddingController_1.bidOnProductController);
exports.default = router;
