import { Sequelize, DataTypes, QueryTypes } from "sequelize";

const db: {
  dbConn?: Sequelize;
  DataTypes?: typeof DataTypes;
  QueryTypes?: typeof QueryTypes;
} = {};

const dbConn = new Sequelize("Advertisement", "postgres", "Commando@123", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
  },
});

dbConn
  .authenticate()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Unable to connect:", err);
  });

db.dbConn = dbConn;
db.DataTypes = DataTypes;
db.QueryTypes = QueryTypes;

export default dbConn;
