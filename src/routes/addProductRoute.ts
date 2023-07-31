
import express from "express";
import { addProductDetailsController } from "../controllers/addProduct";
import { joi_addProduct} from "../middleware/joiValidation";


const router = express.Router();

router.post("/addproduct", joi_addProduct,addProductDetailsController);

export default router;
