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


