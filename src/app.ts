import express from 'express';
import type { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import boardRouter from './routes/boardRouter';
import indexRouter from './routes/indexRouter';
import userRouter from './routes/userRouter';
import 'dotenv/config';

const app: Express = express();
const port = process.env.PORT ?? 3000;
const mongoDb = process.env.MONGO_URL;

// mongoose connection setup
async function main(): Promise<void> {
  if (typeof mongoDb === 'string') {
    await mongoose.connect(mongoDb);
  }
}
main().catch((err) => {
  console.log(err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

// setup routes
app.use('/', indexRouter);
app.use('/board', boardRouter);
app.use('/user', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.render('board');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
