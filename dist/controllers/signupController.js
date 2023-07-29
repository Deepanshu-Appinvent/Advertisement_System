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
const signupService_1 = __importDefault(require("../services/signupService"));
function signUpController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username, email, password, address, status, profile, mobNumber, gender, dob } = req.body;
        try {
            const user = yield signupService_1.default.signUp(username, email, password, address, status, profile, mobNumber, gender, dob);
            res.status(200).json({ message: "Signup successful", user });
        }
        catch (error) {
            console.error("Signup failed:", error);
            res.status(500).json({ message: "Signup failed", error });
        }
    });
}
exports.default = signUpController;
