const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/btc');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('sucessful mongoose connection');
});

var Schema = mongoose.Schema;

var bitcoinSchema = new Schema({
  date: Date,
  price: Number
});

const USD = mongoose.model('USDModel', bitcoinSchema);

const GBP = mongoose.model('GBPModel', bitcoinSchema);

const EUR = mongoose.model('EURModel', bitcoinSchema);

const ETH = mongoose.model('ETHModel', bitcoinSchema);

const RIP = mongoose.model('RIPModel', bitcoinSchema);

const BCH = mongoose.model('BCHModel', bitcoinSchema);

const LTC = mongoose.model('LTCModel', bitcoinSchema);

module.exports = { db, USD, GBP, EUR, ETH, RIP, BCH, LTC };
