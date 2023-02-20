const app = require('./app');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
mongoose.set('strictQuery', true);
const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

app.use(express.static(path.join(__dirname, '../Frontend/public')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../Frontend/public/index.html'));
});

mongoose.connect(DB, {
  useNewUrlParser: true,
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running from port ${port}`);
});
