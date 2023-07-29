"use strict";
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
