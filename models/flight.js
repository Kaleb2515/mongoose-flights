const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = mongoose.Schema({
    airline: { type: String, enum: ['American', 'Southwest', 'United'] },
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
    flightNo: { type: Number, required: Math.floor(Math.random() * (9999 - 10 + 1)) + 10, default: 12345}, 
    departs: { type: Date, default: function() {
        return new Date
    },
 }
});

// compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);