// UserController.ts

import { Request, Response } from "express";
import { getUserById } from "../services/getuserServices";

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await getUserById(Number(userId));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Failed to get user" });
  }
};

// export const getAllUsersController = async (req: Request, res: Response) => {
//   try {
//     const users = await getAllUsers();
//     res.status(200).json({ users });
//   } catch (error) {
//     console.error('Error getting all users:', error);
//     res.status(500).json({ message: 'Failed to get users' });
//   }
// };
