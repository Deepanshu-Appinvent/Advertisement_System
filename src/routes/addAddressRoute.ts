import express from 'express';
import { addAddressForUser } from '../controllers/addAddressController';
import { joi_addAddress} from "../middleware/joiValidation";


const addressRouter = express.Router();

// POST /users/:userId/address
addressRouter.post('/:userId/address', joi_addAddress,addAddressForUser);

export default addressRouter;
