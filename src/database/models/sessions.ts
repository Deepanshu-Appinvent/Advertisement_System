import { DataTypes, Model, Optional } from "sequelize";
import dbConn from "../db_connection";

interface SessionAttributes {
  user_id: number;
  status: boolean;
}

interface SessionCreationAttributes
  extends Optional<SessionAttributes, "user_id"> {}

interface SessionModel
  extends Model<SessionAttributes, SessionCreationAttributes>,
    SessionAttributes {}

const Session = dbConn.define<SessionModel>(
  "categories",
  {
    user_id: {
      type: DataTypes.INTEGER,
      // primaryKey: true,
      // autoIncrement: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      // primaryKey: true,
      // autoIncrement: true,
    },
  }
);

export default Session;
