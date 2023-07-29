
import express from 'express';
import { updateUserController } from '../controllers/updateuserController';

const router = express.Router();

router.put('/update/:userId', updateUserController);

export default router;
