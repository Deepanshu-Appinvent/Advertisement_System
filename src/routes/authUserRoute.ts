import express from "express";
import signUpController from "../controllers/signupController";
import { login } from "../controllers/loginController";
import { gerneratePass } from "../controllers/generatePassController";
import { checkPass } from "../controllers/checkPassController";

import { getUserByIdController } from "../controllers/getuserController";
import { updateUserController } from "../controllers/updateuserController";
import { deleteAccount } from "../controllers/deleteAccountContoller";
import add_photo from "../controllers/updateprofilepicController";
import {
  joi_signup,
  joi_login,
  joi_generatePass,
  joi_checkPass,
} from "../middleware/joiValidation";
import { verifyToken } from "../middleware/JWTAuthentication";

const router = express.Router();

router.post("/signup", joi_signup, signUpController);
router.post("/login", joi_login, login);

router.post("/gerneratePass", joi_generatePass, gerneratePass);
router.post("/checkPass", joi_checkPass, checkPass);

router.use(verifyToken);

router.get("/user/:userId", getUserByIdController);
router.put("/update/:userId", updateUserController);
router.delete("/delete", deleteAccount);
router.post("/addPhoto", add_photo);

export default router;
