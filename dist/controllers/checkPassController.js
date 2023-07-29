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
exports.checkPass = void 0;
const checkPassService_1 = __importDefault(require("../services/checkPassService"));
function checkPass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email, otp, newpassword } = req.body;
            const user = yield (0, checkPassService_1.default)(email, otp, newpassword);
            if (!user) {
                res.send("Invalid OTP or Email");
            }
            else {
                res.status(201).json({
                    message: "OTP Correct",
                    user: user.email,
                    newpassword
                });
            }
        }
        catch (error) {
            console.log(error);
            res.send("Unable to Generate OTP to some error!");
        }
    });
}
exports.checkPass = checkPass;
