"use strict";
// import express from 'express';
// import signupController from '../contr';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// router.post('/', signupController.signUpController);
// export default router;
const express_1 = __importDefault(require("express"));
const signupController_1 = __importDefault(require("../controllers/signupController"));
const joiValidation_1 = require("../middleware/joiValidation");
const router = express_1.default.Router();
router.post("/signup", joiValidation_1.joi_signup, signupController_1.default);
exports.default = router;
