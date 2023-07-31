"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_connection_1 = __importDefault(require("./database/db_connection"));
const authUserRoute_1 = __importDefault(require("./routes/authUserRoute"));
const authProductRoute_1 = __importDefault(require("./routes/authProductRoute"));
const addAddressRoute_1 = __importDefault(require("./routes/addAddressRoute"));
const getCategories_1 = __importDefault(require("./routes/getCategories"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const YAML = __importStar(require("yamljs"));
const path = __importStar(require("path"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml'));
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use("/api", authUserRoute_1.default);
app.use("/api", authProductRoute_1.default);
app.use("/api", addAddressRoute_1.default);
app.use("/api", getCategories_1.default);
db_connection_1.default
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
