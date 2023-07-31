"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class AddPhotoService {
    addPhoto(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projectRoot = process.cwd();
                const uploadsFolder = path_1.default.join(projectRoot, 'uploads');
                const filePath = path_1.default.join(uploadsFolder, filename);
                if (!fs_1.default.existsSync(filePath)) {
                    throw new Error('File not found.');
                }
                const fileBuffer = fs_1.default.readFileSync(filePath);
                const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
                console.log(blob);
                return blob;
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
}
exports.default = AddPhotoService;
// // services/uploadProfilePicService.ts
// import fs from 'fs';
// import multer from 'multer';
// import path from 'path';
// import { Request } from 'express';
// import  User  from '../database/models/user';
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       const destinationPath = 'uploads';
//       fs.mkdirSync(destinationPath, { recursive: true });
//       cb(null, destinationPath);
//     },
//     filename: (req, file, cb) => {
//       const uniqueSuffix = Date.now();
//       const fileExtension = path.extname(file.originalname);
//       cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
//     },
//   }),
// });
// export const uploadProfilePic = async (userId: number, req: Request): Promise<any> => {
//   try {
//     // Upload the photo using Multer's disk storage
//     upload.single('profile')(req, null, async (err: any) => {
//       if (err instanceof multer.MulterError) {
//         throw new Error(err.message);
//       } else if (err) {
//         throw new Error('Server error.');
//       }
//       if (!req.file) {
//         throw new Error('No photo uploaded.');
//       }
//       // Read the uploaded file as a Buffer
//       const buffer = fs.readFileSync(req.file.path);
//       // Update the user's profile with the processed profile picture (buffer)
//       const user = await User.findByPk(userId);
//       if (!user) {
//         throw new Error('User not found.');
//       }
//       user.profile = buffer;
//       await user.save();
//       // Remove the temporary uploaded file
//       fs.unlinkSync(req.file.path);
//     });
//   } catch (error) {
//     throw error;
//   }
// };
// // import fs from 'fs';
// // import path from 'path';
// // class AddPhotoService {
// //   async addPhoto(filename: string) {
// //     try {
// //       const projectRoot = process.cwd();
// //       const uploadsFolder = path.join(projectRoot, 'uploads');
// //       const filePath = path.join(uploadsFolder, filename);
// //       if (!fs.existsSync(filePath)) {
// //         throw new Error('File not found.');
// //       }
// //       const fileBuffer = fs.readFileSync(filePath);
// //       const blob = new Blob([fileBuffer], { type: 'image/jpeg' });
// //       console.log(blob)
// //       return blob;
// //     } catch (error) {
// //       console.error(error);
// //       throw error;
// //     }
// //   }
// // }
// // export default AddPhotoService;
