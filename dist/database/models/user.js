"use strict";
// models/User.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db_connection"));
const User = db_connection_1.default.define('users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    profile: {
        type: sequelize_1.DataTypes.BLOB,
        allowNull: true,
    },
    mobNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    dob: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});
exports.default = User;
