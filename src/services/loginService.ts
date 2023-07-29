import UserCollection from '../database/models/user';
import bcrypt from 'bcrypt';
import {generateToken} from '../middleware/JWTAuthentication';

export async function login_service(email: string, password: string): Promise<any> {
  try {
    const user = await UserCollection.findOne({ where: { email }});

    if (!user) {
      throw new Error('User not found');
    }
    console.log(user)

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid)
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const token = generateToken({userId: user.id});
    return{token, user};
    return user;

  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
}