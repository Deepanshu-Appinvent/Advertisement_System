"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_connection_1 = __importDefault(require("./database/db_connection"));
const signupRoute_1 = __importDefault(require("./routes/signupRoute"));
const loginRoute_1 = __importDefault(require("./routes/loginRoute"));
const ForgetPasswordRoute_1 = __importDefault(require("./routes/ForgetPasswordRoute"));
const getuserRoute_1 = __importDefault(require("./routes/getuserRoute"));
const updateuserRoute_1 = __importDefault(require("./routes/updateuserRoute"));
// import postController from './src/controllers/postController';
// import commentController from './src/controllers/commentController';
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Define routes
// app.post('/posts', postController);
// app.post('/comments', commentController);
app.use('/api', signupRoute_1.default);
app.use('/api', loginRoute_1.default);
app.use('/api', ForgetPasswordRoute_1.default);
app.use('/api', getuserRoute_1.default);
app.use('/api', updateuserRoute_1.default);
// app.use('/delcomment', delcommentRoutes);
db_connection_1.default.authenticate()
    .then(() => {
    console.log('Connection successful');
    const port = process.env.PORT || 6000;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
})
    .catch((err) => {
    console.log('Unable to connect:', err);
});
