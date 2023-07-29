import { Request, Response } from "express";
import signupService from "../services/signupService";

async function signUpController(req: Request, res: Response) {
  const { username, email, password, status, profile, mobNumber, gender, dob } =
    req.body;

  try {
    const user = await signupService.signUp(
      username,
      email,
      password,
      status,
      profile,
      mobNumber,
      gender,
      dob
    );
    res.status(200).json({ message: "Signup successful", user });
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ message: "Signup failed", error });
  }
}

export default signUpController;
