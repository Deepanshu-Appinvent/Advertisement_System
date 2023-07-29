// models/Product.ts

import { DataTypes, Model, Optional } from "sequelize";
import dbConn from "../db_connection";

interface ProductAttributes {
  id: number;
  product_name: string;
  description: string;
  images: Buffer[];
  Bidding: boolean;
  Bidderid: number;
  base_price: number;
  title: string;
  user_id: number;
  category_id: number;
  address_id: number;
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
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.BLOB),
      allowNull: true,
    },
    Bidding: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    Bidderid: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    base_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Product;
