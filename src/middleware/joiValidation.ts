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
  dob: Joi.date().required() 
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
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
  next()
};

export const joi_login = (req: Request, res: Response, next: NextFunction) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};