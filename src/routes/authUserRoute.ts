import express from "express";
import signupRoute from './signupRoute';
import loginRoute from './loginRoute';
import forgetPassword from './ForgetPasswordRoute';
import getuser from './getuserRoute';
import updateuser from './updateuserRoute'
import deleteAccountRoutes from "./deleteAccountRoute";
import profilePic from './updateProfilePic'


const router = express.Router();

router.use('/api', signupRoute);
router.use('/api', loginRoute);
router.use('/api', forgetPassword);
router.use('/api', getuser);
router.use('/api', updateuser);
router.use('/api',deleteAccountRoutes);
router.use('/api', profilePic);


export default router;
