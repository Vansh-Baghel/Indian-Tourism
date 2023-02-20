const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRouter');
const AppError = require('./utils/appError');
const cors = require('cors');

app.use(morgan('dev'));
// Used to get resolve the cors error.
app.use(cors());

// Safety measures
// 1. Limiting requests.
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100, // Setting for 1 hour
  message: 'Too many requests from this IP, please try again after an hour!',
});

app.use('/api/v1/tours', tourRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;