// import express from 'express';
// import signupController from '../contr';

// const router = express.Router();

// router.post('/', signupController.signUpController);

// export default router;

import express, { Router } from "express";
import signUpController  from "../controllers/signupController";
import { joi_signup} from "../middleware/joiValidation";


const router: Router = express.Router();
router.post("/signup", joi_signup,signUpController);
export default router;
