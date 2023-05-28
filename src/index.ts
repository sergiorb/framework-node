import express from 'express';

export const buildApp = (name: string): express.Express => {

  const app = express();

  return app;
}
