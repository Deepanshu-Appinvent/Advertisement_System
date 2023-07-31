import express from "express";
import { updateProductController } from "../controllers/updateProductController";

const router = express.Router();

router.post("/updateproduct", updateProductController);

export default router;
