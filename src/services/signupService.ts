// services/signupService.js
import User from "../database/models/user";
import bcrypt from "bcrypt";

async function signUp(
  username: string,
  email: string,
  password: string,
  address: string,
  status: boolean,
  profile: Buffer,
  mobNumber: string,
  gender: string,
  dob: Date
): Promise<any> {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
      address: address,
      status: status,
      profile: profile,
      mobNumber: mobNumber,
      gender: gender,
      dob: dob,
    });

    console.log("User created:", user.toJSON());
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export default {
  signUp,
};
