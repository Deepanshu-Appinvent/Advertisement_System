import User from "../database/models/user";

export async function deleteAccountByEmail(email: string): Promise<void> {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    await user.destroy();
  } catch (error) {
    throw error;
  }
}
