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
exports.add_photo = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const updateprofilepicService_1 = __importDefault(require("../services/updateprofilepicService"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        const fileExtension = path_1.default.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});
const upload = (0, multer_1.default)({ storage });
const add_photo = (req, res) => {
    try {
        upload.single('photo')(req, res, (err) => __awaiter(void 0, void 0, void 0, function* () {
            if (err instanceof multer_1.default.MulterError) {
                return res.status(400).send(err);
            }
            else if (err) {
                return res.status(500).send('Server error.');
            }
            if (!req.file) {
                return res.status(400).send('No photo uploaded.');
            }
            const { filename, size } = req.file;
            console.log('Uploaded photo:', filename);
            console.log('Size:', size);
            const toBlob = new updateprofilepicService_1.default();
            const blob = toBlob.addPhoto(filename);
            return res.status(200).send(`Photo uploaded successfully... blob is ${blob}`);
        }));
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('some error occured');
    }
};
exports.add_photo = add_photo;
// import { Request, Response } from "express";
// import { uploadProfilePic } from "../services/updateprofilepicService";
// export const uploadProfilePicController = async (
//   req: Request,
//   res: Response
// ) => {
//   const userId = 123; // Replace 123 with the actual user ID, which you can get from the request or authentication
//   try {
//     await uploadProfilePic(userId, req);
//     res.status(200).send("Profile picture uploaded successfully.");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Some error occurred.");
//   }
// };
// // import { Request, Response } from "express";
// // import multer from "multer";
// // import path from "path";
// // import AddPhotoService from "../services/updateprofilepicService";
// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, "uploads");
// //   },
// //   filename: (req, file, cb) => {
// //     const uniqueSuffix = Date.now();
// //     const fileExtension = path.extname(file.originalname);
// //     cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension);
// //   },
// // });
// // const upload = multer({ storage });
// // export const add_photo = (req: Request, res: Response) => {
// //   try {
// //     upload.single("photo")(req, res, async (err) => {
// //       if (err instanceof multer.MulterError) {
// //         return res.status(400).send(err);
// //       } else if (err) {
// //         return res.status(500).send("Server error.");
// //       }
// //       if (!req.file) {
// //         return res.status(400).send("No photo uploaded.");
// //       }
// //       const { filename, size } = req.file;
// //       console.log("Uploaded photo:", filename);
// //       console.log("Size:", size);
// //       const toBlob = new AddPhotoService();
// //       const blob = toBlob.addPhoto(filename);
// //       return res
// //         .status(200)
// //         .send(`Photo uploaded successfully... blob is ${blob}`);
// //     });
// //   } catch (error) {
// //     console.error(error);
// //     return res.status(500).send("some error occured");
// //   }
// // };
