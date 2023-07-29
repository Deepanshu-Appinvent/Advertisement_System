import { Request, Response } from "express";
import { generate_service } from "../services/generatePassService";

export async function gerneratePass(req: Request, res: Response) {
  try {
    const { email } = req.body;
    const user = await generate_service(email);
    if (!user) {
      res.send("Invalid Credentials");
    } else {
      res.status(201).json({
        message: "Generate OTP",
        user:user.email,
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Unable to Generate OTP to some error!");
  }
}
