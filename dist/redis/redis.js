"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
// import { Response,Request } from "express";
// import User from '../database/models/user'
const ioredis_1 = __importDefault(require("ioredis"));
exports.redisClient = new ioredis_1.default({
    host: '127.0.0.1',
    port: 6379
});
// export default async (req:Request, res:Response) => {
//   try{
//     const {user_id }=req.body;
//     const user:any = await User.findOne({ where: {user_id }});
//          console.log(user);
//         if (!user_id) {
//           return res.status(401).json({ message: 'Invalid credentials' });
//         }
//     const keyName='user';
//     let responseArray='';
//     const getCacheData = await redisClient.get(keyName);
//     // console.log('setkey::', getCacheData);
//     if(getCacheData){
//       responseArray = getCacheData;
//         console.log('get cache');
//     }else{
//       responseArray= user
//       console.log('set cache');
//       redisClient.set(keyName,JSON.stringify(user))
//     }
//     res.status(201).json(responseArray);
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }
