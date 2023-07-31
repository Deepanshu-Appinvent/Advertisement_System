"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db_connection"));
const Session = db_connection_1.default.define("categories", {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        // primaryKey: true,
        // autoIncrement: true,
    },
});
exports.default = Session;
