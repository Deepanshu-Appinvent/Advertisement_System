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
exports.joi_deleteProduct = exports.joi_bidding = exports.joi_addProduct = exports.joi_addAddress = exports.joi_checkPass = exports.joi_generatePass = exports.joi_login = exports.joi_signup = void 0;
const joi_1 = __importDefault(require("joi"));
const signUpSchema = joi_1.default.object({
    username: joi_1.default.string().min(3).max(20).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
    status: joi_1.default.boolean().required(),
    profile: joi_1.default.string().required(),
    mobNumber: joi_1.default.string().required(),
    gender: joi_1.default.string().required(),
    dob: joi_1.default.date().required(),
});
const loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
});
const generatePassSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
});
const checkPassSchema = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    otp: joi_1.default.string()
        .pattern(/^\d{6}$/)
        .required(),
    newpassword: joi_1.default.string().min(6).required(),
});
const addAddressSchema = joi_1.default.object({
    houseno: joi_1.default.string().required(),
    streetno: joi_1.default.number().integer().required(),
    area: joi_1.default.string().required(),
    landmark: joi_1.default.string().required(),
    city: joi_1.default.string().required(),
    country: joi_1.default.string().required(),
    zip_code: joi_1.default.number().integer().required(),
    state: joi_1.default.string().required(),
    status: joi_1.default.boolean().required(),
    address_type: joi_1.default.string().required(),
});
const addProductSchema = joi_1.default.object({
    user_id: joi_1.default.number().integer().min(1).required(),
    product_name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    bidding: joi_1.default.number().integer().min(0).required(),
    base_price: joi_1.default.number().integer().min(0).required(),
    title: joi_1.default.string().required(),
    category_id: joi_1.default.number().integer().min(1).required(),
    address_id: joi_1.default.number().integer().min(1).required(),
});
const biddingSchema = joi_1.default.object({
    userId: joi_1.default.number().integer().min(1).required(),
    productId: joi_1.default.number().integer().min(1).required(),
    biddingPrice: joi_1.default.number().integer().min(0).required(),
});
const deleteProductSchema = joi_1.default.object({
    productId: joi_1.default.number().integer().min(1).required(),
});
const joi_signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
});
exports.joi_signup = joi_signup;
const joi_login = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_login = joi_login;
const joi_generatePass = (req, res, next) => {
    const { error } = generatePassSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_generatePass = joi_generatePass;
const joi_checkPass = (req, res, next) => {
    const { error } = checkPassSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_checkPass = joi_checkPass;
const joi_addAddress = (req, res, next) => {
    const { error } = addAddressSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_addAddress = joi_addAddress;
const joi_addProduct = (req, res, next) => {
    const { error } = addProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_addProduct = joi_addProduct;
const joi_bidding = (req, res, next) => {
    const { error } = biddingSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_bidding = joi_bidding;
const joi_deleteProduct = (req, res, next) => {
    const { error } = deleteProductSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
exports.joi_deleteProduct = joi_deleteProduct;
