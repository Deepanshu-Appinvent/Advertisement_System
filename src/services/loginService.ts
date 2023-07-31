// import UserCollection from '../database/models/user';
// import bcrypt from 'bcrypt';
// import {generateToken} from '../middleware/JWTAuthentication';

// export async function login_service(email: string, password: string): Promise<any> {
//   try {
//     const user = await UserCollection.findOne({ where: { email }});

//     if (!user) {
//       throw new Error('User not found');
//     }
//     console.log(user)

//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     console.log(isPasswordValid)
//     if (!isPasswordValid) {
//       throw new Error('Invalid password');
//     }
//     const token = generateToken({userId: user.id});
//     return{token, user};
//     return user;

//   } catch (error) {
//     console.log(error);
//     throw new Error('Login failed');
//   }
// }


import UserCollection from '../database/models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../middleware/JWTAuthentication';
import redis from 'redis';
import Session from '../database/models/sessions'; 

const redisClient = redis.createClient();

const SESSION_EXPIRATION_TIME = 3600;

export async function login_service(email: string, password: string): Promise<any> {
  try {
    const user = await UserCollection.findOne({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const sessionId =  Math.random().toString(36).substr(2, 10);


    const token = generateToken({ userId: user.id });

    redisClient.setEx(sessionId, SESSION_EXPIRATION_TIME, JSON.stringify({ token, user }));

    await Session.create({
      user_id: user.id,
      status: true, 
    });

    return { token, user };
  } catch (error) {
    console.log(error);
    throw new Error('Login failed');
  }
}
