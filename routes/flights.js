const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

//GET /flights/new
router.get('/new', flightsCtrl.new);

// POST /flights
router.post('/', flightsCtrl.create);

// GET All Movies
router.get('/', flightsCtrl.index);

/* GET flights listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
