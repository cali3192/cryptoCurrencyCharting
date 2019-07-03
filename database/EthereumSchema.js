// INSERT ALL Ethereum
const mongoose = require('mongoose');
const moment = require('moment');

// CREATING OUR MODELS
mongoose.connect('mongodb://127.0.0.1/eth');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('sucessful mongoose connection');
});

var Schema = mongoose.Schema;

var ethereumSchema = new Schema({
  date: { type: Date, unique: true },
  price: Number
});

const USD = mongoose.model('USDModel', ethereumSchema);

const GBP = mongoose.model('GBPModel', ethereumSchema);

const EUR = mongoose.model('EURModel', ethereumSchema);

module.exports = { db, USD, GBP, EUR };
