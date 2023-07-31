import { Request, Response } from "express";
import { delete_Service } from "../services/deleteAccountService";

export async function deleteAccount(req: Request, res: Response): Promise<any> {
  const { email } = req.body;

  try {
    await delete_Service(email);
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ message: "Failed to delete account" });
  }
}
