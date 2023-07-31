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
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const user_1 = __importDefault(require("../database/models/user"));
function addPhoto(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const projectRoot = process.cwd();
            const uploadsFolder = path_1.default.join(projectRoot, 'uploads');
            const filePath = path_1.default.join(uploadsFolder, filename);
            try {
                yield promises_1.default.access(filePath);
            }
            catch (err) {
                throw new Error('File not found.');
            }
            const fileBuffer = yield promises_1.default.readFile(filePath);
            const user = yield user_1.default.findOne({ where: { id: 1 } });
            if (user) {
                user.profile = fileBuffer;
                yield user.save();
            }
            return user;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
exports.default = addPhoto;
