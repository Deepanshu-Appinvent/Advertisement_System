import express from "express";
import { deleteProductController } from "../controllers/deleteProductController";
import { joi_deleteProduct} from "../middleware/joiValidation";


const router = express.Router();

router.post("/deleteproduct", joi_deleteProduct,deleteProductController);

export default router;
