module.exports = {
    new: newFlights
}

function newFlights(req, res) {
    res.render('flights/new');
}

