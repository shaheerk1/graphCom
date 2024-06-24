const express = require('express');
const cors = require('cors');
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');

const createExpressServer = () => {
  const app = express();
  app.use(express.json({ limit: '1mb' }));
  app.use(cors({ origin: '*' }));
  app.use(authMiddleware);
  app.use(errorHandler);
  app.get('/', (req, res) => res.send('Hello World!'));
  return app;
};

module.exports = createExpressServer;
