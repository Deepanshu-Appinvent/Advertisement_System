"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addAddressController_1 = require("../controllers/addAddressController");
const addressRouter = express_1.default.Router();
// POST /users/:userId/address
addressRouter.post('/:userId/address', addAddressController_1.addAddressForUser);
exports.default = addressRouter;
