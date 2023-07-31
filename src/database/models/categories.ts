import { DataTypes, Model, Optional } from "sequelize";
import dbConn from "../db_connection";

interface CategoryAttributes {
  id: number;
  category_name: string;
  subcategories: string;
  createdAt: Date;
  updatedAt: Date;
  //image: Buffer;
}

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

interface CategoryModel
  extends Model<CategoryAttributes, CategoryCreationAttributes>,
    CategoryAttributes {}

const Category = dbConn.define<CategoryModel>(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategories: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // image: {
    //   type: DataTypes.BLOB,
    //   allowNull: true,
    // },
  },
  {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);



export default Category;
