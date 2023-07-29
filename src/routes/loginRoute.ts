import express, { Router } from 'express';
import {login} from '../controllers/loginController';
//import { joi_login} from "../middleware/joiValidation";

const router: Router = express.Router();
router.post('/login',login);
export default router;