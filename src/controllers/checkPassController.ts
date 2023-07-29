import { Request, Response } from "express";
import check_service from "../services/checkPassService";

export async function checkPass(req: Request, res: Response) {
  try {
    const { email,otp,newpassword } = req.body;
    const user = await check_service(email,otp,newpassword );
    if (!user) {
      res.send("Invalid OTP or Email");
    } else {
      res.status(201).json({
        message: "OTP Correct",
        user:user.email,
        newpassword
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Unable to Generate OTP to some error!");
  }
}
