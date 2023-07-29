import { Request, Response } from "express";
import { updateUser } from "../services/updateuserServices";

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedUser = await updateUser(Number(userId), req.body);
    res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
};
