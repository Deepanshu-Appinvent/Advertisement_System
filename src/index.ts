import express from "express";
import bodyParser from "body-parser";
import dbConn from "./database/db_connection";
import user from "./routes/authUserRoute";
import product from "./routes/authProductRoute";
import addressRouter from "./routes/addAddressRoute";
import categoriesRouter from "./routes/getCategories";
import swaggerUi from 'swagger-ui-express';
import * as YAML from 'yamljs';
import * as path from 'path';

const app = express();
app.use(bodyParser.json());


const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml')); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api",user);
app.use("/api",product);
app.use("/api", addressRouter);
app.use("/api", categoriesRouter);

dbConn
  .authenticate()
  .then(() => {
    console.log("Connection successful");
    const port = process.env.PORT || 6000;
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect:", err);
  });
