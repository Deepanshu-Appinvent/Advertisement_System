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
exports.generate_service = void 0;
const user_1 = __importDefault(require("../database/models/user"));
const redis_1 = require("redis");
// import {generateToken} from '../middleware/JWTAuthentication';
function generate_service(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.default.findOne({ where: { email } });
            // return user?.email;
            if (!user) {
                throw new Error("User not found");
            }
            else
                console.log(user.email);
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log(otp);
            const client = (0, redis_1.createClient)();
            client.on("error", (err) => console.log("redis Client Error", err));
            yield client.connect();
            const options = { EX: 30 };
            yield client.set(user.email, otp, options);
            return user;
        }
        catch (error) {
            console.log(error);
            throw new Error("Generation failed");
        }
    });
}
exports.generate_service = generate_service;
