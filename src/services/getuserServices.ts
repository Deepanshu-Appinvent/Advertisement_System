// UserService.ts

import User from "../database/models/user";

export const getUserById = async (userId: number): Promise<any | null> => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// export const getAllUsers = async (): Promise<any> => {
//   try {
//     const users = await User.findAll();
//     return users;
//   } catch (error) {
//     console.error('Error fetching all users:', error);
//     throw error;
//   }
// };
