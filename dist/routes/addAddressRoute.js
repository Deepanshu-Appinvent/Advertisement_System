"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const addAddressController_1 = require("../controllers/addAddressController");
const joiValidation_1 = require("../middleware/joiValidation");
const addressRouter = express_1.default.Router();
// POST /users/:userId/address
addressRouter.post('/:userId/address', joiValidation_1.joi_addAddress, addAddressController_1.addAddressForUser);
exports.default = addressRouter;
