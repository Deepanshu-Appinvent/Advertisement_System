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
const addPhotoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fileUpload = yield new Promise((resolve, reject) => {
            upload.single('photo')(req, res, (err) => {
                var _a, _b;
                if (err instanceof multer_1.default.MulterError) {
                    return reject(err);
                }
                else if (err) {
                    return reject(err);
                }
                resolve({ filename: ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) || '', size: ((_b = req.file) === null || _b === void 0 ? void 0 : _b.size) || 0 });
            });
        });
        if (!fileUpload.filename) {
            return res.status(400).send('No photo uploaded.');
        }
        const { filename, size } = fileUpload;
        console.log('Uploaded photo:', filename);
        console.log('Size:', size);
        if (!fileUpload.filename) {
            res.send("something wait wrong");
        }
        const user = (0, updateprofilepicService_1.default)(filename);
        res.send(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send('Some error occurred');
    }
});
exports.default = addPhotoController;
