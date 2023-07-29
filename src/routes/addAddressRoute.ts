import express from 'express';
import { addAddressForUser } from '../controllers/addAddressController';

const addressRouter = express.Router();

// POST /users/:userId/address
addressRouter.post('/:userId/address', addAddressForUser);

export default addressRouter;
