import express from 'express';

import routes from './routes';
import server from './server';

const app = server(express, 3333);

try {
  app.middleware(express.json());
  app.middleware(express.urlencoded({
    extended: false,
  }));
  app.middleware(routes);
  app.start();
} catch (error) {
  // eslint-disable-next-line no-console
  console.log('deu ruim');
}
