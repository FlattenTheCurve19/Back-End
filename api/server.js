const express = require('express');
const server = express();
const messageRouter = require('../messages/router');

server.use(express.json());
server.use('/api/messages', messageRouter);

module.exports = server;