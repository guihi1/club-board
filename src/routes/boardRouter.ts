import express from 'express';

const boardRouter = express.Router();

boardRouter.get('/', (req, res) => {
  res.send('Board not implemented yet');
});

export default boardRouter;
