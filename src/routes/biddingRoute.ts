import express from "express";
import { bidOnProductController } from "../controllers/biddingController";
import { joi_bidding} from "../middleware/joiValidation";


const router = express.Router();

router.post("/bid", joi_bidding,bidOnProductController);

export default router;
