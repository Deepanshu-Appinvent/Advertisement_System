// models/Product.ts

import { DataTypes, Model, Optional } from "sequelize";
import dbConn from "../db_connection";
import User from "./user";
import Category from "./categories";
import Address from "./address";

interface ProductAttributes {
  id: number;
  user_id: number;
  product_name: string;
  description: string;
  bidding: number;
  bidder_id: number;
  base_price: number;
  title: string;
  category_id: number;
  address_id: number;
  //images: Buffer[];
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

interface ProductModel
  extends Model<ProductAttributes, ProductCreationAttributes>,
    ProductAttributes {}

const Product = dbConn.define<ProductModel>(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    bidding: {
      type: DataTypes.INTEGER,
      allowNull: true,
      
    },
    bidder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: User,
        key: "id",
      },
    },
    base_price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Category,
        key: "id",
      },
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Address,
        key: "id",
      },
    },
    // images: {
    //   type: DataTypes.ARRAY(DataTypes.BLOB),
    //   allowNull: true,
    // },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// dbConn.sync({ alter: true })

export default Product;
