import express from 'express';
import bodyParser from 'body-parser';
import dbConn from './database/db_connection';
import signupRoute from './routes/signupRoute';
import loginRoute from './routes/loginRoute';
import forgetPassword from './routes/ForgetPasswordRoute';
import getuser from './routes/getuserRoute';
import updateuser from './routes/updateuserRoute'


// import postController from './src/controllers/postController';
// import commentController from './src/controllers/commentController';

const app = express();
app.use(bodyParser.json());

// Define routes
// app.post('/posts', postController);
// app.post('/comments', commentController);

app.use('/api', signupRoute);
app.use('/api', loginRoute);
app.use('/api', forgetPassword);
app.use('/api', getuser);
app.use('/api', updateuser);
// app.use('/delcomment', delcommentRoutes);


dbConn.authenticate()
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