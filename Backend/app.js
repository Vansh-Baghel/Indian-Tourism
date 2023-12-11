const express = require('express');
const app = express();
const tourRouter = require('./routes/tourRouter');
const AppError = require('./utils/appError');
const cors = require('cors');

app.use(cors());

app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;