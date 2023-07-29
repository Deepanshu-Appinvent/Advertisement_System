import express, { Router } from 'express';
import { getUserByIdController} from '../controllers/getuserController';
//import { joi_login} from "../middleware/joiValidation";

const router: Router = express.Router();

router.get('/user/:userId', getUserByIdController);
// router.get('/user', getAllUsersController);

export default router;