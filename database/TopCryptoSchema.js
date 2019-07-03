// // INSERT ALL Ethereum
// const mongoose = require('mongoose');
// const moment = require('moment');

// // CREATING OUR MODELS
// // mongoose.connect('mongodb://127.0.0.1/topcrypto');
// mongoose.connect('mongodb://127.0.0.1/crypto');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function callback() {
//   console.log('sucessful mongoose connection');
// });

// var Schema = mongoose.Schema;

// var cryptoSchema = new Schema({
//   date: Date,
//   price: Number
// });

// const ETH = mongoose.model('ETHModel', cryptoSchema);

// const RIP = mongoose.model('RIPModel', cryptoSchema);

// const BCH = mongoose.model('BCHModel', cryptoSchema);

// const LTC = mongoose.model('LTCModel', cryptoSchema);

// module.exports = { db, ETH, RIP, BCH, LTC };
