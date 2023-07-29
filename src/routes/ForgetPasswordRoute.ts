import express, { Router } from 'express';
import {gerneratePass} from '../controllers/generatePassController';
import { checkPass } from '../controllers/checkPassController';



const router: Router = express.Router();
router.post('/gerneratePass',gerneratePass);
router.post('/checkPass',checkPass);
export default router;