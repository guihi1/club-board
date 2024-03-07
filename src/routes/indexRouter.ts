import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.redirect('/board');
});

export default indexRouter;
