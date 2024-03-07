import express from 'express';

const userRouter = express.Router();

userRouter.get('/sign-up', (req, res) => {
  res.send('Sign up not implemented yet');
});

userRouter.get('/:username');

userRouter.get('/sign-in');

export default userRouter;
