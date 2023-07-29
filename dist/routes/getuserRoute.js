"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getuserController_1 = require("../controllers/getuserController");
//import { joi_login} from "../middleware/joiValidation";
const router = express_1.default.Router();
router.get('/user/:userId', getuserController_1.getUserByIdController);
// router.get('/user', getAllUsersController);
exports.default = router;
