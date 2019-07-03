const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/btc');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('sucessful mongoose connection');
});

var Schema = mongoose.Schema;

var bitcoinSchema = new Schema({
  date: { type: Date, unique: true },
  price: Number
});

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
const USD = mongoose.model('USDModel', bitcoinSchema);

const GPB = mongoose.model('GPBModel', bitcoinSchema);

const EUR = mongoose.model('EURModel', bitcoinSchema);

module.exports = { db, USD, GPB, EUR };
