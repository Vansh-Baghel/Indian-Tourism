const mongoose = require('mongoose');

const tourModel = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
  },
  indexNum: {
    type: String,
  },
  capital: {
    type: String,
  },
  history: {
    type: String,
    trim: true,
  },
  about: {
    type: String,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
  },
  climate: {
    type: String,
  },
  img: { type: String, require: true },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  products: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: String,
      },
    },
  ],
  tourist: [
    {
      name: {
        type: String,
        required: true,
      },
      info: {
        type: String,
        required: true,
      },
      images: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
  ],
});

const Tour = mongoose.model('Tour', tourModel);

module.exports = Tour;
