"use strict";
// models/Product.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db_connection"));
const Product = db_connection_1.default.define("products", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.BLOB),
        allowNull: true,
    },
    Bidding: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    Bidderid: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    base_price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    address_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
exports.default = Product;
