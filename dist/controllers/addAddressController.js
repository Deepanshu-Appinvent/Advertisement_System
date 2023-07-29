"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAddressForUser = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const addAddressService_1 = require("../services/addAddressService");
const addAddressForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { houseno, streetno, area, landmark, city, country, zip_code, state, status, address_type, } = req.body;
    try {
        const user = yield user_1.default.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const addressData = {
            user_id: user.id,
            houseno,
            streetno,
            area,
            landmark,
            city,
            country,
            zip_code,
            state,
            status,
            address_type,
        };
        const address = yield (0, addAddressService_1.createAddressForUser)(user, addressData);
        console.log(address);
        return res.status(201).json(address);
    }
    catch (error) {
        console.error("Error adding address for user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.addAddressForUser = addAddressForUser;
