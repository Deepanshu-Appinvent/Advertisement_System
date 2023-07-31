import express, { Router } from 'express';
import {add_photo} from '../controllers/updateprofilepicController';

const router: Router = express.Router();
router.post('/addPhoto', add_photo);
export default router;