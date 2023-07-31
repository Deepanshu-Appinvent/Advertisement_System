import express from "express";
import bid from './biddingRoute'
import addproduct from './addProductRoute'
import deleteproduct from "./deleteProductRoute";
import updateproduct from "./updateProductRoute";


const router = express.Router();
router.use('/api', bid);
router.use('/api', addproduct);
router.use("/api", deleteproduct);
router.use("/api", updateproduct);



export default router;
