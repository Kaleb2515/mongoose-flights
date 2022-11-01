const Flight = require('../models/flight');



module.exports = {
    new: newFlight,
    create,
    index
};

function create(req, res) {

}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {

    // remove any whitespace at start and end of departs
    req.body.departs = req.body.departs.trim();
    // split departs into an array if it's not an empty string - using a regular expression as a separator
    if (req.body.departs) req.body.departs = req.body.departs.split(/\s*,\s*/);
    // remove empty properties
    for (let key in req.body) {
      if (req.body[key] === "") delete req.body[key];
    }


// const flight = new Flight(req.body);
//   flight.save(function (err) {
//     if (err) return res.redirect('/flights/new');
//     console.log(flight);
//     res.redirect('/flights');
    
//   });
// }

const flight = new Flight(req.body);
  flight.save(function (err) {
    if (err) {
        console.log(err);
        return res.redirect('/flight/new');
    }
      console.log(flight);
      res.redirect('/flights');
  });
}





function index(req, res) {
    // flights referes to found Flight documents in MongoDB
    Flight.find({}, function (err, movies) {
      if (err) {
        console.log(err);
        res.redirect("/");
      }
      res.render("flights/index", { flights });
    });
  }


  