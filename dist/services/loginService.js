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
exports.login_service = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const JWTAuthentication_1 = require("../middleware/JWTAuthentication");
function login_service(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.findOne({ where: { email } });
            if (!user) {
                throw new Error('User not found');
            }
            console.log(user);
            const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
            console.log(isPasswordValid);
            if (!isPasswordValid) {
                throw new Error('Invalid password');
            }
            const token = (0, JWTAuthentication_1.generateToken)({ userId: user.id });
            return { token, user };
            return user;
        }
        catch (error) {
            console.log(error);
            throw new Error('Login failed');
        }
    });
}
exports.login_service = login_service;
