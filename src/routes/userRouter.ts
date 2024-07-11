import express from 'express';
import * as userController from '../controllers/userController';

const userRouter = express.Router();

// GET request to sign up
userRouter.get('/sign-up', userController.signUp);

// POST request to create a user
userRouter.post('/sign-up', userController.signUpPost);

userRouter.get('/:username');

// GET request to sign in
userRouter.get('/sign-in', userController.signIn);

export default userRouter;
