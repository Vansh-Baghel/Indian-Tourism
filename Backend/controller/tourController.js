const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllTours = catchAsync(async (req, res) => {
  const tours = await Tour.find();

  console.log(tours);

  res.status(200).json({
    status: 'success',
    dataSize: tours.length,
    data: tours,
  });
});
