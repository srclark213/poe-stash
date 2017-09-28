require('dotenv').config();

import * as http from 'http';
import * as debug from 'debug';

import App from './App';

// initialize a debug logger for our server
let logger = debug('poe-stash:server');

// get env port, default 3000
const port = process.env.PORT || 3000;
App.set('port', port);

// create server
const server = http.createServer(App);

// register event handlers
server.on('error', onError);
server.on('listening', onListening);

// start server listening for requests
server.listen(port);

function onError(error: NodeJS.ErrnoException): void {
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;

  // handling some common node exceptions when trying to claim port number
  switch(error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  logger(`Listening on ${bind}`);
}