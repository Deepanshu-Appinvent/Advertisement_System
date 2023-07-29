import express from "express";
import { deleteAccount } from "../controllers/deleteAccountContoller";

const router = express.Router();

router.delete("/delete-account", deleteAccount);

export default router;
