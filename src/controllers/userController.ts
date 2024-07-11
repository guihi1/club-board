import User from '../models/user';
import asyncHandler from 'express-async-handler';
import { body, validationResult } from 'express-validator';
import type { Request, Response } from 'express';

// Display sign up form
const signUp = asyncHandler(async (req: Request, res: Response, next) => {
  res.render('user_form', { title: 'Sign Up' });
});

const signUpPost = [
  body('username', 'Username must have at least three characters.')
    .trim()
    .isLength({ min: 3 })
    .escape(),
  body('fname').trim().escape(),
  body('lname').trim().escape(),
  body('pw').trim().escape(),
  asyncHandler(async (req: Request, res: Response, next) => {
    const errors = validationResult(req);
    console.log(req);
    const user = new User({
      firstName: req.body.fname,
      lastName: req.body.lname,
      username: req.body.username,
      password: req.body.password,
      admin: false,
    });

    if (!errors.isEmpty()) {
      res.render('user_form', {
        title: 'Sign Up',
        user,
        errors: errors.array(),
      });
    } else {
      await user.save();
      res.redirect('/user/sign-in');
    }
  }),
];

// Display sign in form
const signIn = asyncHandler(async (req, res, next) => {
  res.render('user_form', { title: 'Sign In' });
});

export { signUp, signIn, signUpPost };
