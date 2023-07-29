import UserCollection from "../database/models/user";
import bcrypt from "bcrypt";
import { createClient, SetOptions } from "redis";

// import {generateToken} from '../middleware/JWTAuthentication';

export async function generate_service(email: string): Promise<any> {
  try {
    const user = await UserCollection.findOne({ where: { email } });
    // return user?.email;
    if (!user) {
      throw new Error("User not found");
    } else console.log(user.email);
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(otp);
    const client = createClient();
    client.on("error", (err) => console.log("redis Client Error", err));
    await client.connect();
    const options: SetOptions = { EX: 30 };
    await client.set(user.email, otp, options);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Generation failed");
  }
}
