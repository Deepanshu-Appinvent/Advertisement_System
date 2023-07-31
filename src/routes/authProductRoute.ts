import express from "express";
import { bidOnProductController } from "../controllers/biddingController";
import { addProductDetailsController } from "../controllers/addProduct";
import { deleteProductController } from "../controllers/deleteProductController";
import { updateProductController } from "../controllers/updateProductController";
import { filterProductsByPriceController } from "../controllers/filterProductConroller";
import {
  joi_bidding,
  joi_addProduct,
  joi_deleteProduct,
} from "../middleware/joiValidation";
import { verifyToken } from "../middleware/JWTAuthentication";

const router = express.Router();
router.use(verifyToken);

router.post("/bid", joi_bidding, bidOnProductController);
router.post("/addproduct", joi_addProduct, addProductDetailsController);
router.post("/deleteproduct", joi_deleteProduct, deleteProductController);
router.post("/updateproduct", updateProductController);
router.post("/filterproducts", filterProductsByPriceController);

export default router;
