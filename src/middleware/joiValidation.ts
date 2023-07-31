import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const signUpSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  status: Joi.boolean().required(),
  profile: Joi.string().required(),
  mobNumber: Joi.string().required(),
  gender: Joi.string().required(),
  dob: Joi.date().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const generatePassSchema = Joi.object({
  email: Joi.string().email().required(),
});

const checkPassSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string()
    .pattern(/^\d{6}$/)
    .required(),
  newpassword: Joi.string().min(6).required(),
});

const addAddressSchema = Joi.object({
  houseno: Joi.string().required(),
  streetno: Joi.number().integer().required(),
  area: Joi.string().required(),
  landmark: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
  zip_code: Joi.number().integer().required(),
  state: Joi.string().required(),
  status: Joi.boolean().required(),
  address_type: Joi.string().required(),
});

const addProductSchema = Joi.object({
  user_id: Joi.number().integer().min(1).required(),
  product_name: Joi.string().required(),
  description: Joi.string().required(),
  bidding: Joi.number().integer().min(0).required(),
  base_price: Joi.number().integer().min(0).required(),
  title: Joi.string().required(),
  category_id: Joi.number().integer().min(1).required(),
  address_id: Joi.number().integer().min(1).required(),
});

const biddingSchema = Joi.object({
  userId: Joi.number().integer().min(1).required(),
  productId: Joi.number().integer().min(1).required(),
  biddingPrice: Joi.number().integer().min(0).required(),
});

const deleteProductSchema = Joi.object({
  productId: Joi.number().integer().min(1).required(),
});

export const joi_signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = signUpSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const joi_login = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const joi_generatePass = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = generatePassSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const joi_checkPass = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = checkPassSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const joi_addAddress = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = addAddressSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const joi_addProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = addProductSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const joi_bidding = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = biddingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const joi_deleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = deleteProductSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
