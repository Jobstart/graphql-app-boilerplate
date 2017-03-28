import http from 'http';
import express from 'express';
import Promise from 'bluebird';
import debug from 'debug';

const log = debug('graphql:io:server');

import { PORT } from '../../config/environment';

export const app = express();

export const server = http.createServer(app);

export const listen = new Promise((resolve, reject) => server.listen(PORT, err => {
  if (err) {
    error(`error booting server -> ${err.message}`);
    return reject(err);
  }
  log(`server online`);
  return resolve();
}));

listen.then(() => {
  log(`listening on port ${PORT}`);
});
