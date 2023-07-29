// models/User.js

import { DataTypes, Model, Optional } from 'sequelize';
import dbConn from '../db_connection';
import Address from './address';


interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;

  status: boolean;
  profile: Buffer;
  mobNumber: string;
  gender: string;
  dob: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserModel extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

const User = dbConn.define<UserModel>(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    profile: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    mobNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  },
  {
    timestamps: true, 
    createdAt: 'created_at', 
    updatedAt: 'updated_at'
  }
);

// User.hasMany(Address, {
//   foreignKey: "user_id"
// });

export default User;

