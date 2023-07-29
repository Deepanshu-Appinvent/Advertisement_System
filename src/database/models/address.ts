// models/Address.ts

import { DataTypes, Model, Optional } from "sequelize";
import dbConn from "../db_connection";
import User from "./user"; // Import the User model

interface AddressAttributes {
  id: number;
  houseno: string;
  streetno: number;
  area: string;
  landmark: string;
  city: string;
  country: string;
  zip_code: number;
  state: string;
  status: boolean;
  user_id: number;
  address_type: string;
}

interface AddressCreationAttributes extends Optional<AddressAttributes, "id"> {}

interface AddressModel
  extends Model<AddressAttributes, AddressCreationAttributes>,
    AddressAttributes {}

const Address = dbConn.define<AddressModel>(
  "address",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    houseno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    streetno: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    address_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

Address.belongsTo(User, {
  foreignKey: "user_id"
});

export default Address;
