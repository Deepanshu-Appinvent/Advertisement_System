import express, { Router } from 'express';
import {gerneratePass} from '../controllers/generatePassController';
import { checkPass } from '../controllers/checkPassController';
import { joi_generatePass,joi_checkPass} from "../middleware/joiValidation";




const router: Router = express.Router();
router.post('/gerneratePass',joi_generatePass,gerneratePass);
router.post('/checkPass',joi_checkPass,checkPass);
export default router;