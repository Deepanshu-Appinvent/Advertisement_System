"use strict";
// UserService.ts
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
exports.getUserById = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const getUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.default.findByPk(userId);
        return user;
    }
    catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
});
exports.getUserById = getUserById;
// export const getAllUsers = async (): Promise<any> => {
//   try {
//     const users = await User.findAll();
//     return users;
//   } catch (error) {
//     console.error('Error fetching all users:', error);
//     throw error;
//   }
// };
