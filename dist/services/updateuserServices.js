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
exports.updateUser = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const updateUser = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByPk(userId);
        if (!user) {
            throw new Error('User not found');
        }
        user.username = userData.username || user.username;
        user.email = userData.email || user.email;
        user.password = userData.password || user.password;
        user.address = userData.address || user.address;
        yield user.save();
        return user;
    }
    catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
});
exports.updateUser = updateUser;
