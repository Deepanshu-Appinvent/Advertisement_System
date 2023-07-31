"use strict";
// models/Product.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db_connection"));
const user_1 = __importDefault(require("./user"));
const categories_1 = __importDefault(require("./categories"));
const address_1 = __importDefault(require("./address"));
const Product = db_connection_1.default.define("products", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: user_1.default,
            key: "id",
        },
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    bidding: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    bidder_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: user_1.default,
            key: "id",
        },
    },
    base_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    category_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: categories_1.default,
            key: "id",
        },
    },
    address_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: address_1.default,
            key: "id",
        },
    },
    // images: {
    //   type: DataTypes.ARRAY(DataTypes.BLOB),
    //   allowNull: true,
    // },
}, {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
// dbConn.sync({ alter: true })
exports.default = Product;
