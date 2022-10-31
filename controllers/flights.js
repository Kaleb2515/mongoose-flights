const Flight = require('../models/flight');



module.exports = {
    new: newFlights,
    create
};

function create(req, res) {

}

function newFlights(req, res) {
    res.render('flights/new');
}

function create(req, res) {

    // remove any whitespace at start and end of departs
    req.body.departs = req.body.departs.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.departs) req.body.departs = req.body.departs.split(/\s*,\s*/);
    // remove empty properties
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key];
    }
}


//   flights.save(function (err) {
//     if (err) return res.redirect('/flights/new');
//       console.log(flights);
//       res.redirect('/flights');
//   });
