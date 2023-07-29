import { error } from "console";
import { createClient, SetOptions } from "redis";
import UserCollection from "../database/models/user";

export default async function check_service(
  email: string,
  otp: string,
  newpassword: string
): Promise<any> {
  try {
    const client = createClient();
    client.on("error", (err) => console.log("redis Client Error", err));
    await client.connect();
    if (otp == (await client.get(email))) {
      console.log("OTP verified");
      const user = await UserCollection.findOne({ where: { email } });
      if (user) {
        user.password = newpassword;
        await user.save();
      } else {
        throw error("Error updating Password");
      }
      return user;
    } else {
      throw error("Invalid OTP");
    }
  } catch (error) {
    console.log(error);
    return error;
  }
}
