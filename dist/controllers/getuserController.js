"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIdController = void 0;
const getuserServices_1 = require("../services/getuserServices");
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield (0, getuserServices_1.getUserById)(Number(userId));
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    }
    catch (error) {
        console.error("Error getting user:", error);
        res.status(500).json({ message: "Failed to get user" });
    }
});
exports.getUserByIdController = getUserByIdController;
// export const getAllUsersController = async (req: Request, res: Response) => {
//   try {
//     const users = await getAllUsers();
//     res.status(200).json({ users });
//   } catch (error) {
//     console.error('Error getting all users:', error);
//     res.status(500).json({ message: 'Failed to get users' });
//   }
// };
