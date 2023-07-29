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
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerneratePass = void 0;
const generatePassService_1 = require("../services/generatePassService");
function gerneratePass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { email } = req.body;
            const user = yield (0, generatePassService_1.generate_service)(email);
            if (!user) {
                res.send("Invalid Credentials");
            }
            else {
                res.status(201).json({
                    message: "Generate OTP",
                    user: user.email,
                });
            }
        }
        catch (error) {
            console.log(error);
            res.send("Unable to Generate OTP to some error!");
        }
    });
}
exports.gerneratePass = gerneratePass;
