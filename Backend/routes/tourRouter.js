const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router();
const tourController = require(`../controller/tourController`);

router.route('/').get(tourController.getAllTours);

module.exports = router;
