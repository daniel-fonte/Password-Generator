import cors from 'cors';
import express from 'express';

import routes from './routes';
import server from './server';

const app = server(express);
const corsOptions = {
  origin: '*',
};

try {
  app.middleware(express.json());
  app.middleware(express.urlencoded({
    extended: false,
  }));
  app.middleware(cors(corsOptions));
  app.routes(routes);
  app.start(3333);
} catch (error) {
  // eslint-disable-next-line no-console
  app.stop();
}
