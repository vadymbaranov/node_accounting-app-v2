import express from 'express';
import cors from 'cors';

import { usersRouter } from './routes/usersRouter';
import { expensesRouter } from './routes/expensesRouter';

export function createServer() {
  const app = express();

  app.use(cors());

  app.use('/users/', express.json(), usersRouter);

  app.use('/expenses', express.json(), expensesRouter);

  return app;
}