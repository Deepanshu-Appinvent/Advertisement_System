import User from "../database/models/user";

export const updateUser = async (
  userId: number,
  userData: any
): Promise<any | null> => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }

    user.username = userData.username || user.username;
    user.email = userData.email || user.email;
    user.password = userData.password || user.password;

    await user.save();

    return user;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
